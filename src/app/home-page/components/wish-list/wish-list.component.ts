import { Component, Input, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';

import { IProduct } from 'src/app/shared/interfaces/product';
import { Subscription, Observable } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';

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
    return this.visibleWishItems < this.wishListIds.length;
  }

  private getProducts(): void {
    const query = this.wishListIds.slice(0, this.visibleWishItems).join(',');

    this.subscription = this.productsService.getProducts(`ids=${query}`).subscribe(data => {
      this.products = data.products;
    });
  }

  onLoadMore(loadAmount: number): void {
    const productsAmount = this.products.length;
    const newItemsWishList = this.wishListIds.slice(productsAmount, productsAmount + loadAmount).join(',');

    this.loadProducts(newItemsWishList).subscribe(({ products }) => {
      this.products = this.products.concat(products);
      this.visibleWishItems = this.products.length;
    });
  }

  private loadProducts(ids): Observable<any> {
    return this.productsService.getProducts(`ids=${ids}`);
  }
}
