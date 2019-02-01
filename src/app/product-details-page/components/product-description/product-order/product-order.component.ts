import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss']
})
export class ProductOrderComponent implements OnInit {
  @Input() sizes: string[];
  @Input() price: string;
  @Input() addedToCart: boolean;
  @Input() addedToWishList: boolean;
  selected;

  public productConfiguration = {
    count: 1,
    size: '',
    price: ''
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    if (!this.sizes && !this.price) {
      return;
    }
    this.productConfiguration.price = this.price;
  }

  addToCart() {
    this.dataService.create('add-to-cart/', this.productConfiguration).subscribe();
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
