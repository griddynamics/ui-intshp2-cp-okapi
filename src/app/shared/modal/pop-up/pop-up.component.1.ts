import { Component, OnInit } from '@angular/core';
import { ModalContext } from '../modal-context';
import { ICartProduct } from '../../interfaces/product';
import { CartService } from 'src/app/core/services/cart.service';
import { throwIfAlreadyLoaded } from 'src/app/core/guard/module-import-guard';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  cartProducts: ICartProduct[] = [];
  total = 0;
  // isEmpty = false;
  constructor(public context: ModalContext,
             private cartService: CartService ) {}

  ngOnInit() {
    this.cartProducts = JSON.parse(localStorage.getItem('cartProduct'));
    this.totalPrice();
  }

  plus(index) {
    this.cartProducts[index].quantity++;
    this.total += this.cartProducts[index].defaultPrice;
    }

    minus(index) {
      if (this.cartProducts[index].quantity > 1) {
        this. cartProducts[index].quantity --;
        this.total -= this.cartProducts[index].defaultPrice;
      }
    }

    delete(index) {
      this.total -= this.cartProducts[index].defaultPrice * this.cartProducts[index].quantity;
      this.cartProducts.splice(index, 1);
      localStorage.setItem('cartProduct', JSON.stringify(this.cartProducts));
      // this.cartService.updateCart();
    //  localStorage.removeItem('cartProduct');
      // this.cartService.removeFromCart(this.product, this.cartProducts)
      // localStorage.removeItem('cartProduct.id');
      // this.totalPrice();
     // this.cartService.removeFromCart()
    }

    totalPrice () {
       for (let i = 0; i < this.cartProducts.length; i++) {
         this.total += this.cartProducts[i].defaultPrice * this.cartProducts[i].quantity;
        }
        return this.total;
       }


}
