import { Component, OnInit, Input } from '@angular/core';

import { DataService } from 'src/app/core/services/data.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss']
})
export class ProductOrderComponent implements OnInit {
  @Input() product: IProduct;
  @Input() addedToCart: boolean;
  @Input() addedToWishList: boolean;
  public selected: number;

  public productConfiguration = {
    count: 1,
    size: '',
    price: ''
  };

  constructor(
    private dataService: DataService,
    private productsService: ProductsService
    ) { }

  ngOnInit() {
    if (!this.product || !this.product.sizes && !this.product.price) {
      return;
    }
    this.productConfiguration.price = String(this.product.price);
  }

  addToCart() {
    this.dataService.create('add-to-cart/', this.productConfiguration).subscribe();
  }

  public toggleWishList(): void {
    this.productsService.toggleWishListProduct(this.product);
  }

  increaseQuantity() {
    this.productConfiguration.count++;
  }

  decreaseQuantity() {
    if (this.productConfiguration.count > 1) {
      this.productConfiguration.count--;
    }
  }

  onChooseSize(size, i) {
    this.productConfiguration.size = size;
    this.selected = i;
  }
}
