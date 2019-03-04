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
    // const lsArr = JSON.parse(localStorage.getItem('cartProductIds'));

    // if (lsArr) {
    //   const currItemInLs = lsArr.find(el => el.id === this.product.id);
    //   if (!currItemInLs) {
    //     return;
    //   }
    //   this.productConfiguration.count = currItemInLs.quantity;
    //   this.productConfiguration.size = currItemInLs.size;
    //   // this.productConfiguration.price = currItemInLs.price;
    //   this.productConfiguration.swatch = currItemInLs.swatch;
    //   this.selectedSwatch = this.product.swatches.findIndex(el => el.color === currItemInLs.swatch.color);
    //   this.selected = this.product.sizes.indexOf(currItemInLs.size);
    // }
  }

  plus(index) {
    this.cartProducts[index].quantity++;
    this.total += this.cartProducts[index].defaultPrice;
    localStorage.setItem('cartProduct', JSON.stringify(this.cartProducts));
    }

    minus(index) {
      if (this.cartProducts[index].quantity > 1) {
        this. cartProducts[index].quantity --;
        this.total -= this.cartProducts[index].defaultPrice;
        localStorage.setItem('cartProduct', JSON.stringify(this.cartProducts));
      }
    }

    delete(index, product) {
      this.total -= this.cartProducts[index].defaultPrice * this.cartProducts[index].quantity;
      this.cartProducts.splice(index, 1);
      localStorage.setItem('cartProduct', JSON.stringify(this.cartProducts));
      this.cartService.remove(product);
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
