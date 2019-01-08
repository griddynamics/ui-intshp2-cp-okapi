import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  itemArr = ['../../../assets/img/jacket.png','../../../assets/img/jacket2.png',
    '../../../assets/img/jacket4.png', '../../../assets/img/jacket4.png',
    '../../../assets/img/jacket.png', '../../../assets/img/jacket2.png',
    '../../../assets/img/jacket4.png', '../../../assets/img/jacket4.png',
    '../../../assets/img/jacket4.png', '../../../assets/img/jacket4.png',
    '../../../assets/img/jacket4.png', '../../../assets/img/jacket4.png',
    '../../../assets/img/jacket4.png', '../../../assets/img/jacket4.png',
    '../../../assets/img/jacket4.png', '../../../assets/img/jacket4.png',
    '../../../assets/img/jacket4.png', '../../../assets/img/jacket4.png',
    '../../../assets/img/jacket.png', '../../../assets/img/jacket2.png',
    '../../../assets/img/jacket.png', '../../../assets/img/jacket2.png',
    '../../../assets/img/jacket4.png', '../../../assets/img/jacket4.png',
    '../../../assets/img/jacket4.png', '../../../assets/img/jacket4.png'];

  constructor() { }

  ngOnInit() {
  }

}
