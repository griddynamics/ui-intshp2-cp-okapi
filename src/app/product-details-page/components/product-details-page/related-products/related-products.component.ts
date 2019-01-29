import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ActivatedRoute } from '@angular/router';
declare var require: any;

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit {
  json = require('../../../../mocks/pdp.json');
  products: IProduct;
  id: number;
  private sub: any;
  relatedProductsArr = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    if (this.id >= 0 && this.id <= 8) {
      this.relatedProductsArr = this.json[this.id].relatedProducts;
    }
  }
}
