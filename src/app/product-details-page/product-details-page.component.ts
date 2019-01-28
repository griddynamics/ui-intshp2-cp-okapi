import { Component, OnInit, Input } from '@angular/core';
import { RecentlyViewedService } from '../shared/components/recently-viewed/recently-viewed.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../shared/interfaces/product';


@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

 id: number;
 title: string;

 products: IProduct;

  constructor(
    private recView: RecentlyViewedService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    console.log(this.products);
   this.id = +this.route.snapshot.paramMap.get('id');
   this.recView.changeMessage(this.id);
    // this..(this.id)
    //     .subscribe();

    // const currentItem = this.products.filter(el => el.id === this.route.snapshot.params.id);
    // this.recView.setObject(this.id);

    // this.recView.currentProduct.subscribe(products => this.products = products);
    // console.log(this.id);
    // console.log(this.products);
    // console.log(this.title);
  }

}
