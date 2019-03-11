import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { IProduct } from '../../../shared/interfaces/product';

import { ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit, OnDestroy {
  @Input() ids: string[] = [];
  public products: IProduct[] = [];
  public subscription;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    if (!this.ids.length) {
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
    const query = this.ids.join(',');

    this.subscription = this.productsService.getProducts(`ids=${query}`).subscribe(data => {
      this.products = data.products;
    });
  }
}


