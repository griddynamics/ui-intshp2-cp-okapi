import { Component, OnInit } from '@angular/core';
import { IBanner } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  banners: IBanner[] = [{
    height: 100,
    width: 470,
    htmlSnippet: '<img style="width:100%" src="../../../../assets/img/adv_area.png" >',
  }, {
    height: 100,
    width: 470,
    htmlSnippet: '<img style="width:100%" src="../../../../assets/img/adv_area.png" >',
  }];
  constructor() { }

  ngOnInit() {
  }

}
