import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {
  @ViewChild('wrapper') wrapper: ElementRef;
  @Input() products: IProduct[] = [];

  public visibleWishItems = 3;

  get showLoadMore(): Boolean {
    if (!this.products.length) { return false; }
    return this.products.length > this.visibleWishItems;
  }

  public loadMoreHandler(loadAmount): void {
    console.log(loadAmount);
    this.visibleWishItems += loadAmount;
  }
}
