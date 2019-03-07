import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

import { DataService } from './data.service';
import { IProduct } from 'src/app/shared/interfaces/product';

import { environment } from '../../../environments/environment';

import { CartService } from './cart.service';

import { addToCartDecorator, wishListDecorator } from '../../shared/decorators/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private wishListIds: string[] = [];

  public wishListProductSource = new Subject<IProduct>();
  public wishListIdsSource = new BehaviorSubject<string[]>([]);

  constructor(
    private dataService: DataService,
    private cartService: CartService
  ) {
    this.wishListIds = this.getWishListIds();

    this.updateWishListIds();
  }

  public getWishListIds(): string[] {
    const wishListIds = JSON.parse(localStorage.getItem('wishlist'));
    return wishListIds ? wishListIds : this.wishListIds;
  }

  public getProducts(queryString?: string): Observable<any> {
    const { productsURL } = environment;

    const url = queryString ? `${productsURL}?${queryString}` : productsURL;

    return Observable.create((observer) => {
      this.dataService.get(url).subscribe(({ total, products }) => {
        observer.next({ total, products: this.prepareProductResponse(products) });
        observer.complete();
      });
    });
  }

  public addToWishList(product: IProduct): void {
    wishListDecorator(product, [product.id]);
    this.wishListIds.push(product.id);
    this.publishWishList(product);
  }

  public removeFromWishList(product: IProduct): void {
    wishListDecorator(product);
    const indexOfCurrId = this.wishListIds.findIndex(el => el === product.id);
    this.wishListIds.splice(indexOfCurrId, 1);

    this.publishWishList(product);
  }

  public toggleWishListProduct(product: IProduct) {
    if (!product.addedToWishList) {
      this.addToWishList(product);
      return;
    }
    this.removeFromWishList(product);
  }

  private prepareProductResponse(products: IProduct[]): IProduct[] {
    return products.map(el => {
      return addToCartDecorator(wishListDecorator(el, this.wishListIds), this.cartService.getCartProducts());
    });
  }

  private updateWishListIds(): void {
    localStorage.setItem('wishlist', JSON.stringify(this.wishListIds));
    this.wishListIdsSource.next(this.wishListIds);
  }

  private publishWishList(product: IProduct): void {
    this.updateWishListIds();
    this.wishListProductSource.next(product);
  }
}
