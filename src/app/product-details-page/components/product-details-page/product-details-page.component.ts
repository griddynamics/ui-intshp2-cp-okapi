import { IProduct, ProductAvailabilityState, ProductSize } from 'src/app/shared/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

import { ProductDetailsPageService } from 'src/app/core/services/product-details-page.service';



@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit, OnDestroy {
  public product: IProduct;
  private productSubscription;
  productInfo = {
    id: '1',
    name: 'Reebock Track Jacket',
    price: '100$',
    rating: 2,
    // tslint:disable-next-line
    swatches: [{ 'color': 'red', 'imgSrc': '' }, { 'color': 'black', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg' }, { 'color': 'grey', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg' }, { 'color': 'blue', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg' }],
    availability: [ProductAvailabilityState.IN_STORE, ProductAvailabilityState.ONLINE_ONLY],
    thumbnailImageSrc: 'http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png',
    sizes: [ProductSize.S, ProductSize.M, ProductSize.L, ProductSize.XL],
    addedToCart: false,
    addedToWishList: true,
    title: 'Half Jacket + Skiny Trousers + Boot leather',
    description: 'Lorem Lorem Lorem',
  };
  constructor(private route: ActivatedRoute, private productService: ProductDetailsPageService) { }
  ngOnInit() {
    const stored = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    const newProdId = this.route.snapshot.params['id'];
      if (!stored.includes(newProdId)) {
        stored.push(newProdId);
        localStorage.setItem('recentlyViewed', JSON.stringify(stored));
        }
    this.productSubscription = this.route.params.pipe(
      mergeMap((id: String) => this.productService.getProduct(id)
      )).subscribe(product => {
        this.product = product;
      });
      }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}
