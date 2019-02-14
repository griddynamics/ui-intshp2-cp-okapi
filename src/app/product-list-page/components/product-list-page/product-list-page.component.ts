import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductsService } from 'src/app/core/services/products.service';

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
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.allProducts = data;
      this.products = data.slice(0, this.visibleItems);
    });
  }

  public wishListHandler(product: IProduct): void {
    this.productService.toggleWishListProduct(product);
  }

  onLoadMore(loadAmount: number): void {
    this.products = this.allProducts.slice(0, this.products.length + loadAmount);
  }

  get showLoadMore(): Boolean {
    if (!this.allProducts.length) { return false; }

    return this.allProducts.length > this.products.length;
  }

}
