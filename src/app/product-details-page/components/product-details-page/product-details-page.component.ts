import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

import { ProductDetailsPageService } from 'src/app/core/services/product-details-page.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit, OnDestroy {
  public product: IProduct;
  private productSubscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductDetailsPageService,
    private router: Router,
    private loaderService: LoaderService,
    ) { }
  ngOnInit() {
    this.loaderService.displayLoader();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
    this.markAsRecentlyViewed();
    this.productSubscription = this.route.params.pipe(
      mergeMap(({ id }) => {
        return this.productService.getProduct(id);
      }
      )).subscribe(product => {
        this.product = product;
        this.loaderService.hideLoader();
      });
    }

    ngOnDestroy() {
      if (this.productSubscription) {
        this.productSubscription.unsubscribe();
      }
    }

    markAsRecentlyViewed() {
      const recentlyViewedIds = JSON.parse(localStorage.getItem('recentlyViewedIds')) || [];
    this.route.params.subscribe(data => {
      if (!recentlyViewedIds.includes(data.id)) {
        recentlyViewedIds.push(data.id);
        localStorage.setItem('recentlyViewedIds', JSON.stringify(recentlyViewedIds));
      }
    });
  }
}
