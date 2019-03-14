import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IBanner } from 'src/app/shared/interfaces';
import { IProduct } from 'src/app/shared/interfaces/product';

import { environment } from 'src/environments/environment';

import { CartService, DataService, ProductsService, KillswitchService } from '../../../core/services';

import { addToCartDecorator, wishListDecorator } from '../../../shared/decorators/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit, OnDestroy {
  public products: IProduct[] = [];
  public recentlyViewedIds: string[] = [];
  public wishListIds: string[] = [];
  public slideShowImages: any[] = [];
  public banners: IBanner[] = [];
  public wishListEnabled;

  private subscriptions: Subscription[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private killswitchService: KillswitchService,
    private dataService: DataService
  ) {
    this.wishListEnabled = this.killswitchService.getKillswitch('wishListEnabled');
  }

  ngOnInit(): void {
    this.subscriptions = [
      this.productsService.wishListIdsSource.subscribe(ids => this.wishListIds = ids),
      this.dataService.get(environment.homepageURL).subscribe(this.handleResponse.bind(this))
    ];

    this.prepareRecentlyViewedIds();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private handleResponse({arrivals, banners, slideshow}): void {
    this.products = arrivals.map(product => {
      return addToCartDecorator(wishListDecorator(product, this.wishListIds), this.cartService.getCartProducts());
    });

    this.banners = banners;
    this.slideShowImages = slideshow;
  }

  private prepareRecentlyViewedIds() {
    const recentlyViewedIds = localStorage.getItem('recentlyViewedIds');
    this.recentlyViewedIds = recentlyViewedIds ? JSON.parse(recentlyViewedIds) : this.recentlyViewedIds;
  }
}
