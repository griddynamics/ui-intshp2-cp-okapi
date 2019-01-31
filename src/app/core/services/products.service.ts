import { Injectable } from '@angular/core';
import { IProduct, ProductAvailabilityState, ProductSize } from 'src/app/shared/interfaces/product';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private wishListArr: IProduct[] = [];
  private wishListIds: String[] = [];
  private products: IProduct[] = [];

  private wishListSource = new BehaviorSubject<IProduct[]>([]);

  constructor(
    private dataService: DataService,
  ) {
    const wishListIds = JSON.parse(localStorage.getItem('wishlist'));
    this.wishListIds = wishListIds ? wishListIds : [];
  }

  public getWishListArr(): Observable<IProduct[]> {
    return this.wishListSource.asObservable();
  }

  public getProducts(): Observable<IProduct[]> {
    return Observable.create((observer) => {

      this.dataService.get('assets/mock/products.json').subscribe(data => {
        this.products = data;

        data.forEach(product => {
          const currentProduct = this.checkProductInStorage(product);

          if (currentProduct.addedToWishList) {
            this.wishListArr.push(currentProduct);
          }
        });

        this.wishListSource.next(this.wishListArr);
        observer.next(this.products);
      });

    });
  }

  public addToWishList(id: String): void {
    const currentProduct = this.products.find(el => el.id === id);

    if (!currentProduct) {
      throw new Error('product is no longer avaliable');
    }

    currentProduct.addedToWishList = true;
    this.wishListArr.push(currentProduct);
    this.wishListIds.push(id);

    this.updateWishList();
  }

  public removeFromWishList(id: String): void {
    const currentProduct = this.products.find(el => el.id === id);

    if (currentProduct) {
      currentProduct.addedToWishList = false;
    }

    const indexOfCurrId = this.wishListIds.findIndex(el => el === id);
    this.wishListIds.splice(indexOfCurrId, 1);
    const indexOfCurrProduct = this.wishListArr.findIndex(el => el.id === id);
    this.wishListArr.splice(indexOfCurrProduct, 1);

    this.updateWishList();
  }

  private checkProductInStorage(product: IProduct): IProduct {
    product.addedToWishList = this.wishListIds.includes(product.id);
    return product;
  }

  private updateWishList(): void {
    localStorage.setItem('wishlist', JSON.stringify(this.wishListIds));
    this.wishListSource.next(this.wishListArr);
  }
}
