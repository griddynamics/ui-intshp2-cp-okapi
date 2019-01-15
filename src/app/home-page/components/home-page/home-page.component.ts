import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @Input() content = '<img src="../../../../assets/img/adv_area.png" >';
  constructor() { }

  ngOnInit() {
  }

}
