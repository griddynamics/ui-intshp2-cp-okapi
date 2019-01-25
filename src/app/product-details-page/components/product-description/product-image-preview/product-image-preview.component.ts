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
  private smallImagesArr = [];

  ngOnInit() {
    if (!this.swatches) {
      return;
    }
    this.smallImagesArr = [this.thumbnailImageSrc];
    this.swatches.forEach(el => this.smallImagesArr.push(el.imgSrc));
    this.imageSrc = this.thumbnailImageSrc;
  }

  scaleImg(swatch, i) {
    this.imageSrc = swatch;
    this.selectedImg = i;
  }
}
