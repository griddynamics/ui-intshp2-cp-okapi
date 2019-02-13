import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';


@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit {

 @Input() products: IProduct [] = [];

  constructor() { }

  ngOnInit() {
  }

}


