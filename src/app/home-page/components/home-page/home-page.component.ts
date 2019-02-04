import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IBanner } from 'src/app/shared/interfaces';
import { IProduct } from 'src/app/shared/interfaces/product';
import { KillswitchService } from '../../../core/services/killswitch.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})


export class HomePageComponent implements OnInit, OnDestroy {
  public products: IProduct[] = [];
  public wishList: IProduct[] = [];
  public recentlyViewed: IProduct[] = [];

  banners: IBanner[] = [{
    height: 100,
    width: 470,
    htmlSnippet: '<img style="width:100%" src="../../../../assets/img/adv_area.png" >',
  }, {
    height: 100,
    width: 470,
    htmlSnippet: '<img style="width:100%" src="../../../../assets/img/adv_area.png" >',
  }];

  private subscriptions: Subscription[] = [];
  protected wishListEnabled;

  constructor(
    public productsService: ProductsService,
    private killswitchService: KillswitchService
  ) { }

  ngOnInit(): void {
    this.wishListEnabled = this.killswitchService.getKillswitch('wishListEnabled');

    this.subscriptions = [
      this.productsService.getProducts().subscribe(data => {
        this.products = data;
        this.prepareRecentlyViewedItems();
      }),

      this.productsService.getWishList().subscribe(data => {
        this.wishList = data;
      })];

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
