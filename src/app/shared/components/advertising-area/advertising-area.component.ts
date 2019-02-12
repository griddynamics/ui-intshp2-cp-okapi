import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advertising-area',
  templateUrl: './advertising-area.component.html',
  styleUrls: ['./advertising-area.component.scss']
})
export class AdvertisingAreaComponent {

  @Input() content: string;

}
