import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct, IFilter } from 'src/app/shared/interfaces/product';
import { ProductsService } from 'src/app/core/services/products.service';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment.test';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit, OnDestroy {
  public subscription;
  public filters: IFilter[] = [];
  public products: IProduct[] = [];
  private allProducts: IProduct[] = [];
  visibleItems = 9;

  constructor(
    private productService: ProductsService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.subscription = forkJoin(
      this.productService.getProducts(),
      this.dataService.get(environment.filtersURL)
    ).subscribe(([productsResponse, filters]) => {
      this.filters = filters;
      this.allProducts = productsResponse.products;
      this.products = productsResponse.products.slice(0, this.visibleItems);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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
