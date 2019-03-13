import { Component, Input, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IProduct } from '../../../shared/interfaces/product';

import { ProductsService } from '../../../core/services';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit, OnDestroy {
  @ViewChild('wrapper') wrapper: ElementRef;
  @Input() ids: string[] = [];
  public subscriptions: Subscription[] = [];
  public visibleWishItems = 3;
  public products: IProduct[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    if (this.ids.length) {
      this.subscriptions.push(
        this.productsService.getProducts(`ids=${this.ids.join(',')}`).subscribe(({ products }) => this.products = products)
      );
    }

    this.subscriptions.push(this.productsService.wishListProductSource.subscribe(product => this.updateProducts(product)));
  }

  updateProducts(product) {
    if (product.addedToWishList) {
      return this.products.push(product);
    }

    const index = this.products.findIndex(({ id }) => id === product.id);
    this.products.splice(index, 1);
  }

  ngOnDestroy(): void {
    if (this.subscriptions.length) {
      this.subscriptions.forEach(el => {
        el.unsubscribe();
      });
    }
  }

  get showLoadMore(): Boolean {
    if (!this.visibleWishItems) { return false; }
    return this.visibleWishItems < this.ids.length;
  }

  onLoadMore(loadAmount: number): void {
    this.visibleWishItems += loadAmount;
  }
}
