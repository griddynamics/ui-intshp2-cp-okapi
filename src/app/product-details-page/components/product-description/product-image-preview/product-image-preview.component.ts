import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-image-preview',
  templateUrl: './product-image-preview.component.html',
  styleUrls: ['./product-image-preview.component.scss']
})
export class ProductImagePreviewComponent implements OnInit {
  @Input() thumbnailImageSrc: string;
  @Input() swatches: any[];

  public imageSrc;
  public selectedImg = 0;

  ngOnInit() {
    if (!this.swatches) {
      return;
    }
    this.swatches = this.swatches.map(el => el.imgSrc);
    this.swatches.unshift(this.thumbnailImageSrc);
    this.imageSrc = this.thumbnailImageSrc;
  }

  setSelectedImg(swatch, i) {
    this.imageSrc = swatch;
    this.selectedImg = i;
  }
}
