import { Component, OnInit, ElementRef } from '@angular/core';
import { ModalContext } from '../modal-context';
import { ICartProduct } from '../../interfaces/product';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})

export class PopUpComponent implements OnInit {
  cartProducts: ICartProduct[] = [];
  total = 0;
  constructor(public context: ModalContext,
              private cartService: CartService) {}

  ngOnInit() {
    if (!this.cartProducts) {
      return;
    }
    this.cartProducts = JSON.parse(localStorage.getItem('cartProduct'));
    this.getTotalPrice();
  }

  private plus(index) {
    this.cartProducts[index].quantity++;
    this.total += this.cartProducts[index].defaultPrice;
    localStorage.setItem('cartProduct', JSON.stringify(this.cartProducts));
    }

  private minus(index) {
      if (this.cartProducts[index].quantity > 1) {
        this. cartProducts[index].quantity --;
        this.total -= this.cartProducts[index].defaultPrice;
        localStorage.setItem('cartProduct', JSON.stringify(this.cartProducts));
      }
    }

  private delete(index, product) {
      this.total -= this.cartProducts[index].defaultPrice * this.cartProducts[index].quantity;
      this.cartProducts.splice(index, 1);
      localStorage.setItem('cartProduct', JSON.stringify(this.cartProducts));
      this.cartService.remove(product);
    }

  private getTotalPrice () {
    if (!this.cartProducts) {
         return;
       }
       for (let i = 0; i < this.cartProducts.length; i++) {
         this.total += this.cartProducts[i].defaultPrice * this.cartProducts[i].quantity;
        }
        return this.total;
       }

}
