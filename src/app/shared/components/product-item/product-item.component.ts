import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})

export class ProductItemComponent implements OnInit {
  @Input() product;

  private _currentColor;
  showFull = true;
  dynamicImgUrl;

  ngOnInit() {
    this.dynamicImgUrl = this.product.thumbnailImageSrc ? `url(${this.product.thumbnailImageSrc})` : '';
  }

  handleImgView(showFull): void {
    this.showFull = showFull;
    this.dynamicImgUrl = this.product.thumbnailImageSrc ? `url(${this.product.thumbnailImageSrc})` : '';
  }

  hoverStateIn(): void {
    this.handleImgView(false);
  }

  hoverStateOut(): void {
    this.handleImgView(true);
  }

  get isOutOfStock() {
    return !this.product.availability.length;
  }

  onMouseLeave() {
    return this.hoverStateOut();
  }

  onMouseOver() {
    return this.hoverStateIn();
  }

  get currentColor() {
    event.stopPropagation();
    return this._currentColor;
  }

  set currentColor(color) {
    if (this._currentColor === color) {
      return;
    }
    this._currentColor = color;
    this.dynamicImgUrl = this.currentColor.imgSrc ? `url(${this._currentColor.imgSrc})` : '';
  }

  onMouseLeaveColor(): void {
    this._currentColor = null;
    this.dynamicImgUrl = this.product.thumbnailImageSrc ? `url(${this.product.thumbnailImageSrc})` : '';
  }

  onColorChange(color): void {
    this.currentColor = color;
  }
}
