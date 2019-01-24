import { Component, OnInit, Input } from '@angular/core';
import { RecentlyViewedService } from '../shared/components/recently-viewed/recently-viewed.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

 @Input() id: number;

  constructor(
    private recView: RecentlyViewedService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
   this.id = +this.route.snapshot.paramMap.get('id');
    // this..(this.id)
    //     .subscribe();

    // const currentItem = this.products.filter(el => el.id === this.route.snapshot.params.id);
    this.recView.setObject(this.id);
  }

}
