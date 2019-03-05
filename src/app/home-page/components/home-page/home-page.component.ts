import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IBanner } from 'src/app/shared/interfaces';
import { IProduct } from 'src/app/shared/interfaces/product';
import { KillswitchService } from '../../../core/services/killswitch.service';
import { ProductsService } from '../../../core/services/products.service';
import { DataService } from '../../../core/services/data.service';
import { environment } from 'src/environments/environment';
import { LoaderService } from 'src/app/core/services/loader.service';
import { CartService } from 'src/app/core/services/cart.service';
import { addToCartDecorator, wishListDecorator } from 'src/app/core/decorators/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit, OnDestroy {
  public products: IProduct[] = [];
  public wishListIds: string[] = [];
  public wishListArray: IProduct[] = [];
  public recentlyViewed: IProduct[] = [];
  public slideShowImages: any[] = [];
  public banners: IBanner[] = [];
  private subscription: Subscription;
  public wishListEnabled;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private killswitchService: KillswitchService,
    private dataService: DataService,
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {

      const wishListIds = this.productsService.getWishListIds();
      if (wishListIds.join(',').length) {
      this.productsService.getProducts(`ids=${wishListIds.join(',')}`).subscribe(data => {
        this.wishListArray = data.products;
      });
    }
    this.productsService.getWishList().subscribe(data => {
      if (data.length) {
        this.wishListArray = data;
      }
    });

    this.loaderService.displayLoader();
    this.wishListEnabled = this.killswitchService.getKillswitch('wishListEnabled');

    this.subscription = this.dataService.get(environment.homepageURL).subscribe(data => {
      this.products = data.arrivals.map(product => {
        return addToCartDecorator(wishListDecorator(product, this.productsService.getWishListIds()), this.cartService.getCartProducts());
      });

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
    this.wishListIds = wishlistIds ? JSON.parse(localStorage.getItem('wishlist')) : this.wishListIds;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
