import { Component, Input, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';

import { IProduct } from 'src/app/shared/interfaces/product';
import { DataService } from 'src/app/core/services/data.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit, OnDestroy {
  @ViewChild('wrapper') wrapper: ElementRef;
  @Input() products: IProduct[] = [];
  private allProducts: IProduct[] = [];
  public wishListIds;
  public subscription: Subscription;

  public visibleWishItems = 3;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    if (!this.products.length) {
      return;
    }
    this.wishListIds = JSON.parse(localStorage.getItem('wishlist')).join(',');
    this.subscription = this.dataService.get(`${environment.productsURL}?ids=${this.wishListIds}`).subscribe(data => {
      this.products = data.products;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onLoadMore(loadAmount: number): void {
    this.products = this.allProducts.slice(0, this.products.length + loadAmount);
  }

  get showLoadMore(): Boolean {
    if (!this.allProducts.length) { return false; }

    return this.allProducts.length > this.products.length;
  }
}
