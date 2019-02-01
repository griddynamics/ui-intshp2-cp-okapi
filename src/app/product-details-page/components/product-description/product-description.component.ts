import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent {
  @Input() product: IProduct;
}
