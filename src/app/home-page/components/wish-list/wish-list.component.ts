import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';

import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  @ViewChild('wrapper') wrapper: ElementRef;
  @Input() products: IProduct[] = [];
  private allProducts: IProduct[] = [];

  public visibleWishItems = 3;
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.productService.getWishList().subscribe(data => {
      this.allProducts = data;
      this.products = data.slice(0, this.visibleWishItems);
    });
  }

  onLoadMore(loadAmount: number): void {
    this.products = this.allProducts.slice(0, this.products.length + loadAmount);
  }

  get showLoadMore(): Boolean {
    if (!this.allProducts.length) { return false; }

    return this.allProducts.length > this.products.length;
  }
}
