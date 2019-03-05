import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { IProduct, ICartProduct } from '../../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartProducts: ICartProduct[] = [];

  private cartAmountSource = new BehaviorSubject<number>(0);

  constructor() {
    const cartProducts = JSON.parse(localStorage.getItem('cartProduct'));
    this.cartProducts = cartProducts ? cartProducts : this.cartProducts;
    this.publish();
  }

  public addToCart(product: IProduct, cartProduct: ICartProduct): void {
    product.addedToCart = true;
    this.cartProducts.push(cartProduct);
    this.updateCart();
  }

  public removeFromCart(product: IProduct, cartProduct: ICartProduct): void {
    product.addedToCart = false;
    const indexOfCurrId = this.cartProducts.findIndex(el => el.id === cartProduct.id);
    this.cartProducts.splice(indexOfCurrId, 1);
    this.updateCart();
  }

  public toggleCart(product: IProduct, cartProduct: ICartProduct): void {
    if (!product.addedToCart) {
      this.addToCart(product, cartProduct);
      return;
    }
    this.removeFromCart(product, cartProduct);
  }

  public getCartAmount(): Observable<number> {
    return this.cartAmountSource.asObservable();
  }

  public getCartProducts(): ICartProduct[] {
    return this.cartProducts;

  }

  private updateCart(): void {
    localStorage.setItem('cartProduct', JSON.stringify(this.cartProducts));
    this.publish();
  }

  private publish(): void {
    this.cartAmountSource.next(this.cartProducts.length);
  }
}
