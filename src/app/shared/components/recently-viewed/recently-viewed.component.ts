import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit {

  viewedItems;

  constructor() { }

  ngOnInit() {
    this.viewedItems = JSON.parse(localStorage.getItem('recentlyViewed'));
  }

}


