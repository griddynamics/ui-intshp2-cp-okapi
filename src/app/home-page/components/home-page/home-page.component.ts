import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  banners: any[] = [{
    height: 100,
    width: 670,
    content: '<img src="../../../../assets/img/adv.png" >',
  }, {
    height: 100,
    width: 470,
    content: '<img src="../../../../assets/img/adv_area.png" >',
  }];
  constructor() { }

  ngOnInit() {
  }

}
