import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advertising-area',
  templateUrl: './advertising-area.component.html',
  styleUrls: ['./advertising-area.component.scss']
})
export class AdvertisingAreaComponent {

  @Input() height?: number;
  @Input() width?: number;
  @Input() content: string;

  placeholderRatio: number = this.calcPlaceholderRatio(this.height, this.width);


  public calcPlaceholderRatio(height, width) {
    if (height && width) {
      return height / width * 100;
    } else {
      return this.placeholderRatio;
    }
  }
}
