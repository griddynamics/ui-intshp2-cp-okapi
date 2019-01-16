import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertising-area',
  templateUrl: './advertising-area.component.html',
  styleUrls: ['./advertising-area.component.scss']
})
export class AdvertisingAreaComponent implements OnInit {

  @Input() height?: number;
  @Input() width?: number;
  @Input() content: string;
  placeholderRatio: number;

  public calcPlaceholderRatio(height, width) {
    if (height && width) {
      return height / width * 100;
    }
  }
  ngOnInit(): void {
    this.placeholderRatio = this.calcPlaceholderRatio(this.height, this.width);
  }
}
