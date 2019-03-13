import { Component, Input } from '@angular/core';

import { IProduct } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html'
})
export class RelatedProductsComponent {

  @Input() products: IProduct[] = [];
}
