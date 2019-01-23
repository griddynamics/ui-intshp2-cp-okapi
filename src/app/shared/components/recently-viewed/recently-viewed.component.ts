import { Component, OnInit } from '@angular/core';
import { RecentlyViewedService } from './recently-viewed.service';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit {
  previousRoute: string;

  constructor(private recentlyViewedService: RecentlyViewedService) { }

  ngOnInit() {
    this.previousRoute = this.recentlyViewedService.getPreviousUrl();
  }

}
