import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductsService } from 'src/app/core/services/products.service';


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
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    const recentlyViewedIds = localStorage.getItem('recentlyViewedIds');
    this.recentlyViewedIds = recentlyViewedIds ? JSON.parse(recentlyViewedIds) : [];

    if (!this.recentlyViewedIds.length) {
      return;
    }

    this.getProducts();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private getProducts(): void {
    const query = this.recentlyViewedIds.join(',');

    this.subscription = this.productsService.getProducts(`ids=${query}`).subscribe(data => {
      this.products = data.products;
    });
  }
}


