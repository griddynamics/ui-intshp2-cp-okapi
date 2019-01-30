import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductDetailsPageService } from 'src/app/core/services/product-details-page.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit, OnDestroy {

  productSubscription;
  product;

  constructor(private route: ActivatedRoute, private dataService: ProductDetailsPageService) { }

  ngOnInit() {
    this.productSubscription = this.route.params.pipe(
      mergeMap((id: String) => this.dataService.getProduct(id)
      )).subscribe(product => {
        this.product = product;
      });
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}
