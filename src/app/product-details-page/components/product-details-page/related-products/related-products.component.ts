import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductsService } from 'src/app/core/services/products.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html'
})
export class RelatedProductsComponent implements OnInit {

  @Input() products: IProduct[] = [];

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {

    if (this.products) {
      this.products = this.products;
    }
  }

  public wishListHandler(product: IProduct): void {
    this.productService.toggleWishListProduct(product);
  }

    public cartHandler(product: IProduct) {
      this.cartService.toggleCart(product);
    }
}
