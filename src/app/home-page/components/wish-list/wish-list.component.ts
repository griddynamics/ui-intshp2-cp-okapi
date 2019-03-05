import { Component, Input, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';

import { IProduct } from 'src/app/shared/interfaces/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit, OnDestroy {
  @ViewChild('wrapper') wrapper: ElementRef;
  @Input() wishListArray: IProduct[] = [];
  public subscription: Subscription;
  public visibleWishItems = 3;

  ngOnInit() {
    if (!this.wishListArray.length) {
      return;
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get showLoadMore(): Boolean {
    if (!this.visibleWishItems) { return false; }
    return this.visibleWishItems < this.wishListArray.length;
  }

  onLoadMore(loadAmount: number): void {
    this.visibleWishItems += loadAmount;
  }
}
