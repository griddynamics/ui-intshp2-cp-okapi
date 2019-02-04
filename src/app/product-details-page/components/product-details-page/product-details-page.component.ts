import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

import { ProductDetailsPageService } from 'src/app/core/services/product-details-page.service';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit, OnDestroy {
  public product: IProduct;
  private productSubscription;

  constructor(private route: ActivatedRoute, private productService: ProductDetailsPageService) { }
  ngOnInit() {
    this.markAsRecentlyViewed();
    this.productSubscription = this.route.params.pipe(
      mergeMap((id: String) => this.productService.getProduct(id)
      )).subscribe(product => {
        this.product = product;
      });
      }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

  markAsRecentlyViewed() {
    const recentlyViewedIds = JSON.parse(localStorage.getItem('recentlyViewedIds')) || [];
    const newProdId = this.route.snapshot.params['id'];
      if (!recentlyViewedIds.includes(newProdId)) {
        recentlyViewedIds.push(newProdId);
        localStorage.setItem('recentlyViewedIds', JSON.stringify(recentlyViewedIds));
        }
  }

}
