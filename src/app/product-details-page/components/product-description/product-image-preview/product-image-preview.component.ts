import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-image-preview',
  templateUrl: './product-image-preview.component.html',
  styleUrls: ['./product-image-preview.component.scss']
})
export class ProductImagePreviewComponent implements OnChanges {
  @Input() thumbnailImageSrc: string;
  @Input() swatches: any[];

  public imageSrc;
  public selectedImg = 0;
  public swatchesToArray: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    const { thumbnailImageSrc, swatches } = changes;
    if (!thumbnailImageSrc || !swatches.currentValue || !swatches.currentValue.length) {
      return;
    }
    this.swatchesToArray = this.swatches.map(el => el.imgSrc);
    this.swatchesToArray.unshift(this.thumbnailImageSrc);
    this.imageSrc = this.thumbnailImageSrc;
  }

  setSelectedImg(swatch, i) {
    this.imageSrc = swatch;
    this.selectedImg = i;
  }
}
