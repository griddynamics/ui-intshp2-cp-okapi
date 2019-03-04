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
  priceOne;
  // name = "nata";
  constructor(public context:ModalContext,
             private cartService: CartService ) {}

  ngOnInit() {
    this.cartProducts = JSON.parse(localStorage.getItem('cartProduct'));
    console.log(this.cartProducts, 'here');
  }

  plus(index) {
    this.cartProducts[index].quantity++;
    }

    minus(index) {
      if (this.cartProducts[index].quantity > 1) {
        this. cartProducts[index].quantity --;
      }
    }

    delete(index) {
      // this.total -= this.items[index].price;
      this.cartProducts.splice(index, 1);
      // localStorage.removeItem('cartProduct.id');
      // this.totalPrice();
     // this.cartService.removeFromCart()
    }


}
