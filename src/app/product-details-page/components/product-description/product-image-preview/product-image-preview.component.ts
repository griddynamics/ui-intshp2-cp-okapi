import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product-image-preview',
  templateUrl: './product-image-preview.component.html',
  styleUrls: ['./product-image-preview.component.scss']
})
export class ProductImagePreviewComponent implements OnInit, OnChanges {
  @Input() thumbnailImageSrc: string;
  @Input() swatches: any[];
  @Input() selectedSwatch;

  public imageSrc;
  public selectedImg = 0;
  public swatchesToArray: string[] = [];

  ngOnInit() {
    if (!this.swatches) {
      return;
    }
    this.swatchesToArray = this.swatches.map(el => el.imgSrc);
    this.swatchesToArray.unshift(this.thumbnailImageSrc);
    this.imageSrc = this.thumbnailImageSrc;
  }

  ngOnChanges(): void {
    if (!this.selectedSwatch) {
      return;
    }

    const { imgSrc } = this.selectedSwatch;
    const currImgIdx = this.swatchesToArray.findIndex(el => el === imgSrc);
    this.setSelectedImg(imgSrc, currImgIdx);
  }

  setSelectedImg(swatch, i) {
    this.imageSrc = swatch;
    this.selectedImg = i;
  }
}
