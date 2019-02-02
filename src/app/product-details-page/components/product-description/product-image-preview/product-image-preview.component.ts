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
  public swatchesToArray: string[] = [];

  ngOnInit() {
    if (!this.swatches) {
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
