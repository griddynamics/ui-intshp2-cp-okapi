import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { ProductItemComponent } from '../product-item.component';
import { ProductsService } from 'src/app/core/services/products.service';
import { IProduct, ICart } from 'src/app/shared/interfaces/product';
import { throwIfAlreadyLoaded } from 'src/app/core/guard/module-import-guard';

@Component({
  selector: 'app-product-item-for-cart',
  templateUrl: './product-item-for-cart.component.html',
  styleUrls: ['./product-item-for-cart.component.scss']
})
export class ProductItemForCartComponent implements OnInit, AfterContentChecked {


  items: ICart[] = [{
    id: 1,
    name: 'Nike 9000',
    color: 'blue',
    price: 100,
    quantity: 1,
    // sum: 0
  },
  {
    id: 2,
    name: 'Nike 20000',
    color: 'black',
    price: 100,
    quantity: 1,
    // sum: 0
  },
  {
    id: 3,
    name: 'Nike 9000',
    color: 'red',
    price: 200,
    quantity: 1,
    // sum: 0
  },
  {
    id: 4,
    name: 'Nike 20000',
    color: 'yellow',
    price: 175,
    quantity: 2,
    // sum: 0
  },
];

total = 0;
sum = 0;
// total: number;

ngOnInit( )  {
  this.totalPrice ();
}

  plus(index) {
  this.items[index].quantity ++;
  this.sum += this.items[index].price;
  this.total += this.sum;
  // this.totalPrice();
  }

  minus(index) {
    if (this.items[index].quantity > 1) {
      this.items[index].quantity --;
      this.sum -= this.items[index].price;
      this.total -= this.sum;
    }
  }

  delete(index) {
    this.total -= this.items[index].price;
    this.items.splice(index, 1);
    this.totalPrice();
  }

  totalPrice () {
   // this.total = 0;
    for (let i = 0; i < this.items.length; i++) {
      this.total  += this.items[i].price * this.items[i].quantity;
        // this.total = sumItem + this.items[i].price;
      }
      return this.total;
    }
}
