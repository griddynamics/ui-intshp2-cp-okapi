import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductsService } from 'src/app/core/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  private allProducts: IProduct[] = [];
  visibleItems = 9;
  private productsSubscription: Subscription;

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.productsSubscription = this.productsService.getProducts().subscribe((products) => {
      this.allProducts = products;
      this.products = products.slice(0, this.visibleItems);
    });
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }

   public onLoadMore(loadAmount: number): void {
    this.products = this.allProducts.slice(0, this.products.length + loadAmount);
  }

  get showLoadMore(): Boolean {
    if (!this.allProducts.length) { return false; }
    return this.allProducts.length > this.products.length;
  }

}
