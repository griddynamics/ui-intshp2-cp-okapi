import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advertising-area',
  templateUrl: './advertising-area.component.html',
  styleUrls: ['./advertising-area.component.scss']
})
export class AdvertisingAreaComponent implements OnInit {

  @Input() contentHeight: number;
  @Input() contentWidth: number;
  content: string;
  placeholderRatio = this.contentHeight / this.contentWidth * 100;

  constructor() {}

  ngOnInit() {}
}
