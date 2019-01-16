import { Component, Input, OnInit } from '@angular/core';
import { ISwatch } from '../../interfaces/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product;

  isNotHovered = true;
  _currentThumbnail;
  private _currentSwatch;

  ngOnInit() {
    if (!this.product) {
      return;
    }

    this.resetDefaultThumbnail();
  }

  get currentThumbnail(): String {
    return this._currentThumbnail;
  }

  set currentThumbnail(value: String) {
    this._currentThumbnail = value ? `url(${value})` : '';
  }

  get isOutOfStock() {
    return !this.product.availability.length;
  }

  get currentSwatch() {
    return this._currentSwatch;
  }

  set currentSwatch(color) {
    if (this._currentSwatch === color) {
      return;
    }
    this._currentSwatch = color;
    this.currentThumbnail = this.currentSwatch.imgSrc;
  }

  handleImgView(isNotHovered ): void {
    this.isNotHovered  = isNotHovered;
    this.resetDefaultThumbnail();
  }

  hoverStateIn(): void {
    this.handleImgView(false);
  }

  hoverStateOut(): void {
    this.handleImgView(true);
  }

  onMouseLeave() {
    return this.hoverStateOut();
  }

  onMouseOver() {
    return this.hoverStateIn();
  }

  onMouseLeaveColor(): void {
    this._currentSwatch = null;
    this.resetDefaultThumbnail();
  }

  onSwatchChange(swatch: ISwatch): void {
    event.stopPropagation();

    this.currentSwatch = swatch;
  }

  private resetDefaultThumbnail(): void {
    this.currentThumbnail = this.product.thumbnailImageSrc;
  }
}
