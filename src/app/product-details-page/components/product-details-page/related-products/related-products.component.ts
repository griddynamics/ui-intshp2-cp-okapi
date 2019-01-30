import { Component, Input, OnChanges } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html'
})
export class RelatedProductsComponent implements OnChanges {

  @Input() products: IProduct[] = [];

  ngOnChanges(): void {
    if (this.products) {
      this.products = this.products;
    }
  }
}
