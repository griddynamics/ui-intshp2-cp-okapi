import { Component, OnInit, OnDestroy } from '@angular/core';

import { IProduct } from '../../../shared/interfaces/product';

import { ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit, OnDestroy {
  public products: IProduct[] = [];
  public subscription;
  public recentlyViewedIds: string[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.getWishListIds();

    if (!this.recentlyViewedIds.length) {
      return;
    }

    this.getProducts();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public getWishListIds () {
    const recentlyViewedIds = localStorage.getItem('recentlyViewedIds');
    this.recentlyViewedIds = recentlyViewedIds ? JSON.parse(recentlyViewedIds) : [];
  }

  private getProducts(): void {
    const query = this.recentlyViewedIds.join(',');

    this.subscription = this.productsService.getProducts(`ids=${query}`).subscribe(data => {
      this.products = data.products;
    });
  }
}


