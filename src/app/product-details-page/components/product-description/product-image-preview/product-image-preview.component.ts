import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-product-image-preview',
  templateUrl: './product-image-preview.component.html',
  styleUrls: ['./product-image-preview.component.scss']
})

export class ProductImagePreviewComponent implements OnChanges {
  @Input() thumbnailImageSrc: string;
  @Input() swatches: any[];
  @Input() selectedSwatch;


  public imageSrc;
  public selectedImg = 0;
  public swatchesToArray: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (!this.thumbnailImageSrc || !this.swatches || !this.swatches.length) {
      return;
    }
    this.swatchesToArray = this.swatches.map(el => el.imgSrc);
    this.swatchesToArray.unshift(this.thumbnailImageSrc);
    this.imageSrc = this.thumbnailImageSrc;

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