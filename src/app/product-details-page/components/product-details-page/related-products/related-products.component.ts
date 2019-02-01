import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html'
})
export class RelatedProductsComponent implements OnInit {

  @Input() products: IProduct[] = [];

  ngOnInit(): void {
    if (this.products) {
      this.products = this.products;
    }
  }
}
