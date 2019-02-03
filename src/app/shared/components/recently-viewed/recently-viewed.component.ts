import { Component, OnInit, Input } from '@angular/core';
import { ProductAvailabilityState, ProductSize, IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit {

 @Input() products: IProduct [] = [];

  constructor() { }

  ngOnInit() {
    const recentlyViewIds = JSON.parse(localStorage.getItem('recentlyViewed'));
    if (recentlyViewIds) {
      this.products = this.products.filter( el => recentlyViewIds.some(e => e === el.id ));
    } else {
      this.products = [];
    }
  }

}


