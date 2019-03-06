import { Component, Input, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { IProduct } from '../../../shared/interfaces/product';

import { ProductsService } from '../../../core/services';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit, OnDestroy {
  @ViewChild('wrapper') wrapper: ElementRef;
  @Input() products: IProduct[] = [];
  public wishListIds;
  public subscription: Subscription;

  public visibleWishItems = 3;
  private startFrom = 0;
  private loadTo = 9;
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.getWishListIds();

    if (!this.products.length) {
      return;
    }
    this.getProducts();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public getWishListIds() {
    const wishListIds = localStorage.getItem('wishlist');
    this.wishListIds = wishListIds ? JSON.parse(wishListIds) : [];
  }

  get showLoadMore(): Boolean {
    if (!this.visibleWishItems) { return false; }
    return this.visibleWishItems < this.products.length;
  }

  private getProducts(): void {
    const query = this.wishListIds.join(',');

    this.subscription = this.productsService.getProducts(`ids=${query}`).subscribe(data => {
      this.products = data.products;
    });
  }

  onLoadMore(loadAmount: number): void {
    this.startFrom = this.loadTo;
    this.loadTo = this.loadTo + loadAmount;

    this.loadProducts(this.startFrom, this.loadTo).subscribe(({ products }) => {
      this.products = this.products.concat(products);
    });
  }

  private loadProducts(from: number, to: number): Observable<any> {
    return this.productsService.getProducts(`start=${from}&end=${to}`);
  }
}
