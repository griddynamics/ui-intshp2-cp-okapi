import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';


import { DataService } from 'src/app/core/services/data.service';
import { KillswitchService } from 'src/app/core/services/killswitch.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/core/services/cart.service';


@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss']
})
export class ProductOrderComponent implements OnChanges, OnInit {
  @Input() product: IProduct;
  public selected: number;
  selectedSwatch: number;
  @Output() swatchSelect = new EventEmitter();

  public productConfiguration = {
    id: '',
    quantity: 1,
    size: '',
    price: 0,
    swatch: ''
  };

  public wishListEnabled;

  constructor(
    private productsService: ProductsService,
    private dataService: DataService,
    private cartService: CartService,
    private killswitchService: KillswitchService
  ) { }

  ngOnInit(): void {
    this.productConfiguration.id = this.product.id;
    const cartProductsArr = JSON.parse(localStorage.getItem('cartProductIds'));

    if (cartProductsArr) {
      const currItemInCart = cartProductsArr.find(el => el.id === this.product.id);
      if (!currItemInCart) {
        return;
      }

      this.productConfiguration = { ...currItemInCart };
      this.selectedSwatch = this.product.swatches.findIndex(el => el.color === currItemInCart.swatch.color);
      this.selected = this.product.sizes.indexOf(currItemInCart.size);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.wishListEnabled = this.killswitchService.getKillswitch('wishListEnabled');
    if (!this.product || !this.product.sizes && !this.product.price) {
      return;
    }

    const { product } = changes;
    if (!product) {
      return;
    }
    const { price } = product.currentValue;
    this.productConfiguration.price = price;
  }

  public addToCart() {
    if (this.product.addedToCart) {
      alert('Open add to cart popup here');
      return;
    }
    this.dataService.create('add-to-cart/', this.productConfiguration).subscribe();
  }

  public toggleCart(): void {
    const { id, quantity, swatch, price, size } = this.productConfiguration;
    this.cartService.toggleCart(this.product, { id, quantity, swatch, price, size });
  }

  get isDisabledAddToCartBtn() {
    return this.productConfiguration.size && this.productConfiguration.swatch;
  }

  public toggleWishList(): void {
    this.productsService.toggleWishListProduct(this.product);
  }

  public increaseQuantity(): void {
    this.productConfiguration.quantity++;
    this.productConfiguration.price += this.product.price;
  }

  public decreaseQuantity(): void {
    if (this.productConfiguration.quantity > 1) {
      this.productConfiguration.quantity--;
      this.productConfiguration.price -= this.product.price;
    }
  }

  public onChooseSize(size: string, i: number): void {
    this.productConfiguration.size = size;
    this.selected = i;
  }

  public onChooseColor(swatch: string, i: number): void {
    this.productConfiguration.swatch = swatch;
    this.selectedSwatch = i;
    this.swatchSelect.emit(swatch);
  }
}
