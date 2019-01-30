import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductDetailsPageService } from 'src/app/core/services/product-details-page.service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html'
})
export class RelatedProductsComponent implements OnInit {

  products: IProduct;
  id: number;
  private sub: any;
  productsArr;
  relatedProductsArr;
  relatedProductsArrLength;
  test: number;


  constructor(private mock: ProductDetailsPageService) { }

  ngOnInit() {
    this.mock.getRelatedProducts().subscribe(data => {
      this.relatedProductsArr = data.relatedProducts;
      this.relatedProductsArrLength = this.relatedProductsArr.length;
  });
}
}
