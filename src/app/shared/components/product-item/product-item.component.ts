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
  public _currentSwatch;

  protected wishListEnabled;
//   observer: IntersectionObserver;

//   options: any = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.1
//   };

//   images = document.querySelectorAll('img');
//   // console.log(this.i)

//   fetchImage = (url) => {
//     return new Promise((resolve, reject) => {
//       const image = new Image();
//       image.src = url;
//       image.onload = resolve;
//       image.onerror = reject;
//     });
// }

// loadImage = (image) => {
//   const src = image.dataset.src;
//   this.fetchImage(src).then(() => {
//     image.src = src;
//   });

// }

// handleIntersection = (entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.intersectionRatio > 0) {
//       console.log(entry.intersectionRatio);
//       this.loadImage(entry.target);
//     }
//   });
// }

  constructor(private killswitchService: KillswitchService) {}

  ngOnInit() {
    // this.observer = new IntersectionObserver(this.handleIntersection, this.options);
    // this.images.forEach(img => {
    //   this.observer.observe(img);
    // });
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
    this.addItemToWishList.emit(this.product);
  }

  public resetDefaultThumbnail(): void {
    this.currentThumbnail = this.product.thumbnailImageSrc;
  }

  protected handleImgView(isHovered ): void {
    this.isHovered  = isHovered;
    this.resetDefaultThumbnail();
  }
}
