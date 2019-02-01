import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ISwatch } from '../../interfaces/product';
import { KillswitchService } from 'src/app/core/services/killswitch.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() public product;
  @Output() addItemToWishList = new EventEmitter();


  isHovered = false;
  _currentThumbnail;
  private _currentSwatch;

  protected wishListEnabled;

  constructor(private killswitchService: KillswitchService) {}

  ngOnInit() {
    this.wishListEnabled = this.killswitchService.getKillswitch('wishListEnabled');

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
    return !this.product.availability || !this.product.availability.length;
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

  hoverStateIn(): void {
    this.handleImgView(true);
  }

  hoverStateOut(): void {
    this.handleImgView(false);
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

  addToWishList(): void {
    event.stopPropagation();
    this.product.addedToWishList = !this.product.addedToWishList;
    this.addItemToWishList.emit(this.product);
  }

  private resetDefaultThumbnail(): void {
    this.currentThumbnail = this.product.thumbnailImageSrc;
  }

  protected handleImgView(isHovered ): void {
    this.isHovered  = isHovered;
    this.resetDefaultThumbnail();
  }
}
