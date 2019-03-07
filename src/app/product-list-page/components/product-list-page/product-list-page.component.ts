import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { IProduct, IFilter } from 'src/app/shared/interfaces/product';

import { environment } from 'src/environments/environment.test';

import { DataService, ProductsService } from 'src/app/core/services';

const AMOUNT_TO_DISPLAY = 9;

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit, OnDestroy {
  public subscriptions: Subscription[];
  public filters: IFilter[] = [];
  public products: IProduct[] = [];
  public currentFilters;
  public startFrom = 0;
  public loadTo = AMOUNT_TO_DISPLAY;
  public total = AMOUNT_TO_DISPLAY;
  public queryParams: any = null;

  constructor(
    private productsService: ProductsService,
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscriptions = [
      this.dataService.get(environment.filtersURL).subscribe((filters) => this.filters = filters),
      this.route.queryParams.subscribe(this.handleQueryParams.bind(this))
    ];
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
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

    this.getProductsByQuery().subscribe(({ products, total }) => {
      this.setProductsResponse({ total, products: this.products.concat(products) });
    });
  }

  private handleQueryParams(queryParams: Object): void {
    this.queryParams = queryParams;
    this.resetLimit();
    this.getProductsByQuery().subscribe(this.setProductsResponse.bind(this));
  }

  private getProductsByQuery(): Observable<any> {
    const searchString = location.search ? `${location.search}&`.substring(1) : '';
    return this.productsService.getProducts(`${searchString}start=${this.startFrom}&end=${this.loadTo}`);
  }

  private setProductsResponse({ products, total }): void {
    this.products = products;
    this.total = total;
  }

  private resetLimit(): void {
    this.startFrom = 0;
    this.loadTo = AMOUNT_TO_DISPLAY;
  }
}
