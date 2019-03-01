import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct, IFilter } from 'src/app/shared/interfaces/product';
import { ProductsService } from 'src/app/core/services/products.service';
import { forkJoin, Observable } from 'rxjs';

import { environment } from 'src/environments/environment.test';
import { DataService } from 'src/app/core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit, OnDestroy {
  public subscription;
  public filters: IFilter[] = [];
  public products: IProduct[] = [];
  public currentFilters;
  public route;
  public startFrom = 0;
  public loadTo = 9;
  public total = 9;

  constructor(
    private productsService: ProductsService,
    private dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subscription = forkJoin(
      this.loadProducts(this.startFrom, this.loadTo),
      this.dataService.get(environment.filtersURL)
    ).subscribe(([productsResponse, filters]) => {
      const { products, total } = productsResponse;

      this.filters = filters;
      this.products = products;
      this.total = total;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get totalAmount(): number {
    return this.total;
  }

  set totalAmount(value: number) {
    this.total = value;
  }

  get showLoadMore(): Boolean {
    if (this.total === this.products.length) { return false; }

    return this.total > this.products.length;
  }

  public wishListHandler(product: IProduct): void {
    this.productsService.toggleWishListProduct(product);
  }

  public onLoadMore(loadAmount: number): void {
    this.startFrom = this.loadTo;
    this.loadTo = this.loadTo + loadAmount;

    this.loadProducts(this.startFrom, this.loadTo).subscribe(({ total, products }) => {
      this.products = this.products.concat(products);
      this.total = total;
    });
  }

  public onFilterChange(currentFilters) {
    this.router.navigate(['/products'], { queryParams: currentFilters }).then(() => {
      this.route = this.router.url;
      this.getFilteredProducts(this.route);
    });
  }

  public getFilteredProducts(route) {
    this.dataService.get(`api${route}`).subscribe(filteredProducts => {
      this.products = filteredProducts.products;
      this.total = filteredProducts.total;
    });
  }

  private loadProducts(from: number, to: number): Observable<any> {
    return this.productsService.getProducts(`start=${from}&end=${to}`);
  }
}
