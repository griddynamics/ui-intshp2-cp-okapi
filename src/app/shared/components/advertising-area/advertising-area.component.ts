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

  calcPlaceholderRatio(height = 100, width = 200) {
    return height / width * 100;
  }
}
