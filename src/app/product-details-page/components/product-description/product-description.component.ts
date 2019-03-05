import { Component, Input } from '@angular/core';

import { IProduct, ISwatch } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent {
  @Input() product: IProduct;

  public selectedSwatch: ISwatch;

  onSwatchSelect(e) {
    this.selectedSwatch = e;
  }
}
