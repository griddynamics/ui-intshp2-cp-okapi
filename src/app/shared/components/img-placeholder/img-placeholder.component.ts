import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-placeholder',
  templateUrl: './img-placeholder.component.html',
  styleUrls: ['./img-placeholder.component.scss']
})
export class ImgPlaceholderComponent implements OnInit {

  @Input() height?: number;
  @Input() width?: number;
  placeholderRatio: number;

  ngOnInit() {
    this.placeholderRatio = this.calcPlaceholderRatio(this.height, this.width);
  }

  public calcPlaceholderRatio(height, width) {
    if (height && width) {
      return height / width * 100;
    }
  }

}
