import { Component, OnInit, Input } from '@angular/core';
import { RecentlyViewedService } from './recently-viewed.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit {
  id: number;
  title: string;
  data;
  item;

  products;
  constructor(private recentlyViewedService: RecentlyViewedService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recentlyViewedService.currentProduct.subscribe(data => {
      this.products = data;
      console.log(this.products, 'tut');
      // this.item = JSON.parse(localStorage.getItem('recentlyViewed'));
     //  console.log(this.item, 'itemmmmmm');
      // this.products.push(data);
       this.data = JSON.parse(localStorage.getItem('recentlyViewed'));
     console.log(data);
    });
    // localStorage.setItem('proddd', JSON.stringify(this.data));
    // this.id = +this.route.snapshot.paramMap.get('id');
    // // this..(this.id)
    // //     .subscribe();

    // // const currentItem = this.products.filter(el => el.id === this.route.snapshot.params.id);
    // this.recentlyViewedService.setObject(this.id);
    // this.recentlyViewedService.currentProduct.subscribe(id => this.id = id);
    // console.log(this.id);
    // console.log(this.products);
    // console.log(this.id);
    // console.log(this.title);
  }
}
