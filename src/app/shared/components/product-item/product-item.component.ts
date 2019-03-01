import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation, SimpleChanges, OnChanges } from '@angular/core';
import { ISwatch } from '../../interfaces/product';
import { KillswitchService } from 'src/app/core/services/killswitch.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() public product;

  isHovered = false;
  _currentThumbnail;
  public wishListEnabled;
  private _currentSwatch;
  private _swatchThumbnail = '';


  constructor(
    private killswitchService: KillswitchService,
    private router: Router,
    private cartService: CartService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.wishListEnabled = this.killswitchService.getKillswitch('wishListEnabled');

    if (!this.product) {
      return;
    }

    this.resetDefaultThumbnail();
  }

  get currentThumbnail(): string {
    return this._currentThumbnail;
  }

  set currentThumbnail(value: string) {
    this._currentThumbnail = value || '';
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
    this.swatchThumbnail = color.imgSrc;
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
    this.resetDefaultSwatch();
  }

  onSwatchChange(swatch: ISwatch): void {
    event.stopPropagation();

    this.currentSwatch = swatch;
  }

  addToWishList(): void {
    event.stopPropagation();
    this.productsService.toggleWishListProduct(this.product);
  }

  addToCart(): void {
    event.stopPropagation();

    if (this.product.addedToCart) {
      alert('Open add to cart popup here');
      return;
    }
    this.router.navigate(['/products', this.product.id]);
  }

  set swatchThumbnail(value) {
    this._swatchThumbnail = value;
  }

  get swatchThumbnail() {
    return this._swatchThumbnail ? `url(${this._swatchThumbnail})` : '';
  }

  public resetDefaultThumbnail(): void {
    this.currentThumbnail = this.product.thumbnailImageSrc;
  }

  private resetDefaultSwatch(): void {
    this.swatchThumbnail = this.currentThumbnail;
  }

  protected handleImgView(isHovered): void {
    this.isHovered = isHovered;
    this.resetDefaultThumbnail();
    this.resetDefaultSwatch();
  }
}
