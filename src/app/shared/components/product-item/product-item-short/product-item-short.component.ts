import { Component, Input } from '@angular/core';
import { ProductItemComponent } from '../product-item.component';

@Component({
  selector: 'app-product-item-short',
  templateUrl: './product-item-short.component.html',
  styleUrls: ['./product-item-short.component.scss']
})

export class ProductItemShortComponent extends ProductItemComponent {
  @Input() product;
  starsArray = Array(4).fill(null).map((x, i) => i);
  isHovered = false;

  handleImgView(isHovered): void {
    this.isHovered = isHovered;
  }
}
