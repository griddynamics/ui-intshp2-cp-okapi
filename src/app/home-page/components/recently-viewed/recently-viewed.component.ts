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
  public products: IProduct[] = [];
  public subscription;
  public recentlyViewedIds: string[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    const recentlyViewedIds = localStorage.getItem('recentlyViewedIds');
    this.recentlyViewedIds = recentlyViewedIds ? JSON.parse(recentlyViewedIds) : [];

    if(!this.recentlyViewedIds.length) return;

    const query = this.recentlyViewedIds.join(',');

    this.subscription = this.dataService.get(`${environment.productsURL}?ids=${query}`).subscribe(data => {
      this.products = data.products;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}


