import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-image-preview',
  templateUrl: './product-image-preview.component.html',
  styleUrls: ['./product-image-preview.component.scss']
})

export class ProductImagePreviewComponent implements OnChanges, OnInit {
  @Input() thumbnailImageSrc: string;
  @Input() swatches: any[];
  @Input() selectedSwatch;

  public imageSrc;
  public selectedImg = 0;
  public swatchesToArray: string[] = [];

  ngOnInit(): void {
    if (!this.swatches) {
      return;
    }
     if (!this.thumbnailImageSrc || !this.swatches || !this.swatches.length) {
      this.imageSrc = '';
    }
    if (!this.thumbnailImageSrc && this.swatches.length) {
        this.imageSrc = this.swatches[0].imgSrc;
    } else {
      this.imageSrc = this.thumbnailImageSrc;
    }
  }

  ngOnChanges() {
    if (!this.swatches) {
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
