import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { DataService } from 'src/app/core/services/data.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit, OnDestroy {

  @Input() products: IProduct[] = [];
  public subscription;
  public recentlyViewedIds;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    if (!this.products.length){
      return
    }
    this.recentlyViewedIds = JSON.parse(localStorage.getItem('recentlyViewedIds')).join(',');
    this.subscription = this.dataService.get(`${environment.productsURL}?ids=${this.recentlyViewedIds}`).subscribe(data => {
      this.products = data.products;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}


