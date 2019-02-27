import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IBanner } from 'src/app/shared/interfaces';
import { IProduct } from 'src/app/shared/interfaces/product';
import { KillswitchService } from '../../../core/services/killswitch.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { DataService } from 'src/app/core/services/data.service';
import { environment } from 'src/environments/environment';
import { LoaderService } from 'src/app/core/services/loader.service';

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
  private subscription;
  public wishListEnabled;

  constructor(
    public productsService: ProductsService,
    private killswitchService: KillswitchService,
    private dataService: DataService,
    private loaderService: LoaderService,
  ) { }

  ngOnInit(): void {
    this.loaderService.displayLoader();
    this.wishListEnabled = this.killswitchService.getKillswitch('wishListEnabled');

    this.subscription = this.dataService.get(environment.homepageURL).subscribe(data => {
      this.products = data.arrivals;
      this.banners = data.banners;
      this.slideShowImages = data.slideshow;
      this.loaderService.hideLoader();
    });
    this.checkRecentlyViewedItems();
    this.checkWishListItems();
  }

  private checkRecentlyViewedItems() {
    const recentlyViewedIds = localStorage.getItem('recentlyViewedIds');
    this.recentlyViewed = recentlyViewedIds ? JSON.parse(recentlyViewedIds) : this.recentlyViewed;
  }
  private checkWishListItems() {
    const wishlistIds = localStorage.getItem('wishlist');
    this.wishList = wishlistIds ? JSON.parse(localStorage.getItem('wishlist')) : this.wishList;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
