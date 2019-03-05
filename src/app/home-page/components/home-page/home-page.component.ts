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
  public wishList: IProduct[] = [];
  public recentlyViewed: IProduct[] = [];
  public slideShowImages: any[] = [];
  public banners: IBanner[] = [];
  private subscription: Subscription;
  public wishListEnabled;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private killswitchService: KillswitchService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.wishListEnabled = this.killswitchService.getKillswitch('wishListEnabled');

    this.subscription = this.dataService.get(environment.homepageURL).subscribe(data => {
      this.products = data.arrivals.map(product => {
        return addToCartDecorator(wishListDecorator(product, this.productsService.getWishListIds()), this.cartService.getCartProducts());
      });

      this.banners = data.banners;
      this.slideShowImages = data.slideshow;
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
