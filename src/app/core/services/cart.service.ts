import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { DataService } from './data.service';
import { IProduct } from 'src/app/shared/interfaces/product';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart: IProduct[] = [];
  private cartIds: String[] = [];
  private products: IProduct[] = [];

  private cartSource = new BehaviorSubject<IProduct[]>([]);

  constructor(
    private dataService: DataService,
  ) {
    const cartIds = JSON.parse(localStorage.getItem('cart'));
    this.cartIds = cartIds ? cartIds : this.cartIds;
  }

  public addToCart(product: IProduct) {
    product.addedToCart = true;
    this.cart.push(product);
    this.cartIds.push(product.id);
    this.updateCart();
  }

  public removeFromCart(product: IProduct): void {
    product.addedToCart = false;
    const indexOfCurrId = this.cartIds.findIndex(el => el === product.id);
    this.cartIds.splice(indexOfCurrId, 1);
    const indexOfCurrProduct = this.cart.findIndex(el => el.id === product.id);
    this.cart.splice(indexOfCurrProduct, 1);

    this.updateCart();
  }

  public toggleCart(product: IProduct) {
    if (!product.addedToCart) {
      this.addToCart(product);
      return;
    }
    this.removeFromCart(product);
  }

  private checkProductInCart(product: IProduct): IProduct {
    product.addedToCart = this.cartIds.includes(product.id);
    return product;
  }

  private prepareCartResponse(products: IProduct[]): void {
    this.products = products.map(el => {
      const currentProduct = this.checkProductInCart(el);
      const isPresentInCart = this.cart.find(product => product.id === currentProduct.id);
      if (currentProduct.addedToCart && !isPresentInCart) {
        this.cart.push(currentProduct);
      }

      return currentProduct;
    });
  }

  public getProducts(): Observable<IProduct[]> {
    return Observable.create((observer) => {

      this.dataService.get(environment.productsURL).subscribe(({products}) => {
        this.prepareCartResponse(products);
        this.cartSource.next(this.cart);
        observer.next(this.products);
        observer.complete();
      });

    });
  }

  public getCart(): Observable<IProduct[]> {
    return this.cartSource.asObservable();
  }

  private updateCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartIds));
    this.cartSource.next(this.cart);
  }
}
