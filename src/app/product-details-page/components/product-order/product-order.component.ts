import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { IProduct, ICartProduct, ProductSize } from 'src/app/shared/interfaces/product';
import { PopUpComponent } from 'src/app/shared/modal/pop-up/pop-up.component';
import { ModalService } from 'src/app/core/services/modal.service';
import { KillswitchService, ProductsService, CartService } from '../../../core/services';

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

  public productConfiguration: ICartProduct = {
    id: '',
    name: '',
    quantity: 1,
    size: ProductSize.M,
    price: 0,
    defaultPrice: 0,
    swatch: ''
  };

  public wishListEnabled;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private killswitchService: KillswitchService,
    private modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    const { id, name, price } = this.product;
    this.productConfiguration.id = id;
    this.productConfiguration.name = name;
    this.productConfiguration.defaultPrice = price;

    const cartProducts = this.cartService.getCartProducts();

    if (cartProducts) {
      const currentCartProduct = cartProducts.find(el => el.id === this.product.id);
      if (!currentCartProduct) {
        return;
      }

      this.productConfiguration = { ...currentCartProduct };
      this.selectedSwatch = this.product.swatches.findIndex(el => el.color === currentCartProduct.swatch);
      this.selected = this.product.sizes.indexOf(currentCartProduct.size);
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

  public openInCart(): void {
    if (this.product.addedToCart) {
      this.modalService.open(PopUpComponent);
      return;
    }
  }

  public toggleCart(): void {
    const { id, name, quantity, swatch, size, defaultPrice } = this.productConfiguration;
    this.cartService.toggleCart(this.product, { id, name, quantity, swatch, size, defaultPrice });
  }

  get isDisabledAddToCartBtn() {
    return this.productConfiguration.size && this.productConfiguration.swatch;
  }

  public toggleWishList(): void {
    this.productsService.toggleWishListProduct(this.product);
  }

  public increaseQuantity(): void {
    const { quantity } = this.productConfiguration;
    const { amount: onStockAmount } = this.product;

    if (quantity === onStockAmount) {
      return;
    }

    this.productConfiguration.quantity++;
    this.productConfiguration.price += this.product.price;
  }

  public decreaseQuantity(): void {
    if (this.productConfiguration.quantity > 1) {
      this.productConfiguration.quantity--;
      this.productConfiguration.price -= this.product.price;
    }
  }

  public onChooseSize(size: ProductSize, i: number): void {
    this.productConfiguration.size = size;
    this.selected = i;
  }

  public onChooseColor(swatch: string, i: number): void {
    this.productConfiguration.swatch = swatch;
    this.selectedSwatch = i;
    this.swatchSelect.emit(swatch);
  }
}
