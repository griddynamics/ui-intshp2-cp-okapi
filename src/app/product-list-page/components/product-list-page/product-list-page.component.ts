import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductsService } from 'src/app/core/services/products.service';
import { CartService } from 'src/app/core/services/cart.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  products: IProduct[] = [];
  private allProducts: IProduct[] = [];
  visibleItems = 9;

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    const observable = forkJoin(
      this.productService.getProducts(),
      this.cartService.getProducts()
    );
    observable.subscribe((data) => {
      this.allProducts = data[0].map((el, i) => {
        if (data[1].some(e => e.id === el.id)) {
          el.addedToCart = data[1][i].addedToCart;
        }
        return el;
      });
      this.products = data[0].slice(0, this.visibleItems);
    });
  }

  public cartHandler(product: IProduct) {
    this.cartService.toggleCart(product);
  }

  public wishListHandler(product: IProduct): void {
    this.productService.toggleWishListProduct(product);
  }

   public onLoadMore(loadAmount: number): void {
    this.products = this.allProducts.slice(0, this.products.length + loadAmount);
  }

  get showLoadMore(): Boolean {
    if (!this.allProducts.length) { return false; }
    return this.allProducts.length > this.products.length;
  }

}
