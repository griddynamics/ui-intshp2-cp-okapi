import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

import { IProduct } from 'src/app/shared/interfaces/product';
import { IFilter } from 'src/app/shared/interfaces';
import { ProductsService } from 'src/app/core/services/products.service';
import { environment } from 'src/environments/environment.test';
import { DataService } from 'src/app/core/services/data.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { KillswitchService } from 'src/app/core/services/killswitch.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit, OnDestroy, AfterViewInit {
  public subscription;
  public filters: IFilter[] = [];
  public products: IProduct[] = [];
  public loadMoreScrollEnabled: Boolean;
  private startFrom = 0;
  private loadTo = 9;
  private total = 9;

  constructor(
    private productsService: ProductsService,
    private dataService: DataService,
    private loaderService: LoaderService,
    private killswitchService: KillswitchService
  ) { this.onScroll = this.onScroll.bind(this); }

  ngOnInit() {
    this.loadMoreScrollEnabled = this.killswitchService.getKillswitch('loadMoreScrollEnabled');
    this.loaderService.displayLoader();
    this.subscription = forkJoin(
      this.loadProducts(this.startFrom, this.loadTo),
      this.dataService.get(environment.filtersURL)
      ).subscribe(([productsResponse, filters]) => {

      const { products, total } = productsResponse;

      this.filters = filters;
      this.products = products;
      this.total = total;
      this.loaderService.hideLoader();
    });
  }

  ngAfterViewInit(): void {
    if (this.loadMoreScrollEnabled) {
      window.addEventListener('scroll', this.onScroll);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public wishListHandler(product: IProduct): void {
    this.productsService.toggleWishListProduct(product);
  }

  get totalAmount(): number {
    return this.total;
  }

  set totalAmount(value: number) {
    this.total = value;
  }

  onLoadMore(loadAmount: number): void {
    this.startFrom = this.loadTo;
    this.loadTo = this.loadTo + loadAmount;

    this.loadProducts(this.startFrom, this.loadTo).subscribe(({ total, products }) => {
      this.products = this.products.concat(products);
      this.total = total;
    });
  }

  get showLoadMore(): Boolean {
    if (this.total === this.products.length) { return false; }

    return this.total > this.products.length;
  }

  private loadProducts(from: number, to: number): Observable<any> {
    return this.productsService.getProducts(`start=${from}&end=${to}`);
  }

  public onScroll() {
    const btnLoadMore = document.querySelector('.load-more');
    let btnRect;
    if (btnLoadMore) {
      btnRect =  btnLoadMore.getBoundingClientRect();
      if (btnRect.top < window.innerHeight - 200) {
        this.onLoadMore(3);
      }
    }
  }
}
