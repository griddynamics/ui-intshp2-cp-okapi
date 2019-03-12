import { Component, OnInit } from '@angular/core';
import { ICartProduct } from '../../interfaces/product';
import { CartService } from 'src/app/core/services/cart.service';
import { ModalContext } from '../modal-window/modal-context';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartProducts: ICartProduct[] = [];
  total = 0;
  constructor(public context: ModalContext,
    private cartService: CartService) { }

  ngOnInit() {
    if (!this.cartProducts) {
      return;
    }
    this.cartProducts = JSON.parse(localStorage.getItem('cartProduct'));
    console.log(this.cartProducts);
    this.getTotalPrice();
  }

  private plus(index) {
    if (this.cartProducts[index].quantity === this.cartProducts[index].amountInStock) {
      return;
    }
    this.cartProducts[index].quantity++;
    this.total += this.cartProducts[index].defaultPrice;
    localStorage.setItem('cartProduct', JSON.stringify(this.cartProducts));
  }

  private minus(index) {
    if (this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--;
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

  private getTotalPrice() {
    if (!this.cartProducts) {
      return;
    }
    this.total = this.cartProducts.reduce((total, { defaultPrice, quantity }) => total + (defaultPrice * quantity), 0);
  }
}
