import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})

export class ProductItemComponent {
  @Input() product;

  private _currentColor;
  private placeholder = '../../../../assets/img/default.png';
  showFull = true;
  dynamicImgUrl = this.placeholder;

  handleImgView(showFull): void {
    this.showFull = showFull;
    this.dynamicImgUrl = this.product.thumbnailImageSrc ? `url(${this.product.thumbnailImageSrc})` : `url(${this.placeholder})`;
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

  get currentColor() {
    return this._currentColor;
  }

  set currentColor(color) {
    if (this._currentColor === color) {
      return;
    }
    this._currentColor = color;
    this.dynamicImgUrl = this.currentColor.imgSrc ? `url(${this._currentColor.imgSrc})` : `url(${this.placeholder})`;
  }

  setDefaultImg(): void {
    this._currentColor = null;
    this.dynamicImgUrl = this.product.thumbnailImageSrc ? `url(${this.product.thumbnailImageSrc})` : `url(${this.placeholder})`;
  }

  onColorChange(color): void {
    this.currentColor = color;
  }

  getRightImg() {
    return this.product.thumbnailImageSrc ? this.product.thumbnailImageSrc : this.placeholder;
  }
}
