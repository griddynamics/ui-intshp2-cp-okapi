import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
export class ProductOrderComponent implements OnInit {
  @Input() product: IProduct;
  public selected: number;

  public productConfiguration = {
    count: 1,
    size: '',
    price: 0,
    swatch: '',
  };
  public wishListEnabled;

  constructor(
    private productsService: ProductsService,
    private dataService: DataService,
    private cartService: CartService,
    private killswitchService: KillswitchService
    ) { }

  ngOnInit() {
    this.wishListEnabled = this.killswitchService.getKillswitch('wishListEnabled');
    if (!this.product || !this.product.sizes && !this.product.price) {
      return;
    }
    this.productConfiguration.price = this.product.price;
  }

  public addToCart() {
    this.dataService.create('add-to-cart/', this.productConfiguration).subscribe();
  }

  public toggleCart(): void {
    const view = {
      id: this.product.id,
      quantity: this.productConfiguration.count,
      swatch: this.productConfiguration.swatch,
      size: this.productConfiguration.size,
    };
    this.cartService.toggleCart(this.product, view);
  }

  public toggleWishList(): void {
    this.productsService.toggleWishListProduct(this.product);
  }

  public increaseQuantity(): void {
    this.productConfiguration.count++;
    this.productConfiguration.price += this.product.price;
  }

  public decreaseQuantity(): void {
    if (this.productConfiguration.count > 1) {
      this.productConfiguration.count--;
      this.productConfiguration.price -= this.product.price;
    }
  }

  public onChooseSize(size: string, i: number): void {
    this.productConfiguration.size = size;
    this.selected = i;
  }
}
