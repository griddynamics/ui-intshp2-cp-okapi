import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss']
})
export class ProductOrderComponent implements OnInit {
  @Input() sizes: string;
  @Input() price: string;
  @Input() addedToCart: boolean;
  @Input() addedToWishList: boolean;
  selected;

  public productConfiguration = {
    count: 1,
    size: '',
    price: ''
  };

  constructor() { }

  ngOnInit() {
    if (!this.sizes && !this.price) {
      return;
    }
    this.productConfiguration.price = this.price;

  }

  changePlus() {
    this.productConfiguration.count++;
  }

  changeMinus() {
    if (this.productConfiguration.count > 1) {
      this.productConfiguration.count--;
    }
  }

  onChooseSize(size, i) {
    this.productConfiguration.size = size;
    this.selected = i;
  }
}
