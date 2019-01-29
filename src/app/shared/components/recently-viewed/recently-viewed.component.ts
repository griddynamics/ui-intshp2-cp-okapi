import { Component, OnInit, Input } from '@angular/core';
import { RecentlyViewedService } from './recently-viewed.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../interfaces/product';
import { getFirstTemplatePass } from '@angular/core/src/render3/state';
import { getSymbolIterator } from '@angular/core/src/util';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit {
  id: number;
  title: string;
  product;
  item;
  LS = [];
  newItem;
  condition;

  products: IProduct [] = [];
  // constructor(private recentlyViewedService: RecentlyViewedService,
  //             private route: ActivatedRoute) { }

  ngOnInit() {
    // this.condition = JSON.parse(localStorage.getItem('some'));
    // if (!this.condition) {
    //   const arrForStorage = JSON.stringify([]);
    //   localStorage.setItem('some', arrForStorage);
    //   console.log(arrForStorage);
    // } else {
    //   this.setObject(this.condition);
    // }
    // const oldItems = JSON.parse(localStorage.getItem('some')) || [];
    // console.log(oldItems);
    // oldItems.push(JSON.parse(localStorage.getItem('some')));
    // localStorage.setItem('some', JSON.stringify(oldItems));
    // console.log(oldItems);
    // this.item = JSON.parse(localStorage.getItem('some'));
    // console.log(this.item, 'hereeeeee');
    // this.LS.push(this.item);
    // console.log(this.LS);
    // this.recentlyViewedService.currentProduct.subscribe(data => {
      // this.products = data;
      // this.item = localStorage.getItem('recentlyViewed');
      // localStorage.setItem('item', this.item);
      //  console.log(this.item, 'i got it');
      // console.log(this.item);
      // });
      // localStorage.setItem('proddd', JSON.stringify(this.data));
      // this.id = +this.route.snapshot.paramMap.get('id');
      // // this..(this.id)
      // //     .subscribe();
      // // const currentItem = this.products.filter(el => el.id === this.route.snapshot.params.id);
      // this.recentlyViewedService.setObject(this.id);
      // this.recentlyViewedService.currentProduct.subscribe(id => this.id = id);
      // console.log(this.products);
    }
      public setObject(item) {
      const LSarr = JSON.parse(localStorage.getItem('some'));
      LSarr.push(item);
      localStorage.setItem('some', JSON.stringify(LSarr));
      console.log(JSON.parse(localStorage.getItem('recentlyViewed')));
    }
    // console.log(this.id);
    // console.log(this.title);
}
