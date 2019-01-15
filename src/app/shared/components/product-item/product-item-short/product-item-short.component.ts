import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-item-short',
  templateUrl: './product-item-short.component.html',
  styleUrls: ['./product-item-short.component.scss']
})

export class ProductItemShortComponent {
  @Input() product;
  showShort = true;

  handleImgView(showShort) {
    this.showShort = showShort;
  }

  hoverStateIn(): void {
    this.handleImgView(false);
  }

  hoverStateOut(): void {
    this.handleImgView(true);
  }

  get isOutOfStock() {
    if (!this.product.availability.length) {
      return this.hoverStateOut();
    }
      return this.hoverStateIn();
  }
}
