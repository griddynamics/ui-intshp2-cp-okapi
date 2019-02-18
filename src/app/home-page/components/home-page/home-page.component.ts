import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IBanner } from 'src/app/shared/interfaces';
import { IProduct } from 'src/app/shared/interfaces/product';
import { KillswitchService } from '../../../core/services/killswitch.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { DataService } from 'src/app/core/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})


export class HomePageComponent implements OnInit, OnDestroy {
  public products: IProduct[] = [];
  public wishList: IProduct[] = [];
  public recentlyViewed: IProduct[] = [];
  public slideShowImages: any[] = [];


  public banners: IBanner[] = [];

  private subscriptions: Subscription[] = [];
  public wishListEnabled;

  constructor(
    public productsService: ProductsService,
    private killswitchService: KillswitchService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.wishListEnabled = this.killswitchService.getKillswitch('wishListEnabled');

    this.subscriptions = [
      this.dataService.get('api/homepage').subscribe(data => {
        this.products = data.arrivals;
      }),

      this.productsService.getWishList().subscribe(data => {
        this.wishList = data;
      }),

      this.dataService.get('api/homepage').subscribe(data => {
        this.slideShowImages = data.slideshow;
      }),

      this.dataService.get('api/homepage').subscribe(data => {
        this.banners = data.banners;
      })
  ];
  }

  private prepareRecentlyViewedItems() {
    const recentlyViewIds = JSON.parse(localStorage.getItem('recentlyViewedIds'));
    if (recentlyViewIds) {
      this.recentlyViewed = this.products.filter( el => recentlyViewIds.some(e => e === el.id ));
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

  public wishListHandler(product: IProduct): void {
    this.productsService.toggleWishListProduct(product);
  }

}
