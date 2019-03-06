import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService, ProductsService, DataService } from '../core/services';

import { environment } from '../../environments/environment';

import { IProduct } from 'src/app/shared/interfaces/product';
import { addToCartDecorator, wishListDecorator } from '../shared/decorators/product';

@Injectable()
export class ProductDetailsPageService {
  constructor(private dataService: DataService, private productsService: ProductsService, private cartService: CartService) {}

  getProduct(id: String): Observable<IProduct> {
    return Observable.create((observer) => {
      this.dataService.get(`${environment.productsURL}/${id}`).subscribe((product: IProduct ) => {
        observer.next(
          addToCartDecorator(wishListDecorator(product, this.productsService.getWishListIds()), this.cartService.getCartProducts())
        );
        observer.complete();
      });
    });
  }
}
