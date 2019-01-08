import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertising-area',
  templateUrl: './advertising-area.component.html',
  styleUrls: ['./advertising-area.component.scss']
})
export class AdvertisingAreaComponent implements OnInit {

  contentHeight: number;
  contentWidth: number;
  content: string;
  preloadedPaddingBottom;

  constructor() {}

  ngOnInit() {
      this.preloadedPaddingBottom = this.contentHeight / this.contentWidth * 100;
  }
}
