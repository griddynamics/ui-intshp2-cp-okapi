import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/product';

import { environment } from '../../../environments/environment';
import { addToCartDecorator, wishListDecorator } from '../decorators/product';
import { ProductsService } from './products.service';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsPageService {


  constructor(private dataService: DataService, private productsService: ProductsService, private cartService: CartService) {}

  getProduct(id: String): Observable<IProduct> {
    return Observable.create((observer) => {
      this.dataService.get(`${environment.productsURL}/${id}`).subscribe((product: IProduct ) => {
        observer.next(
          addToCartDecorator(wishListDecorator(product, this.productsService.getWishListIds()), this.cartService.getCartIds())
        );
        observer.complete();
      });
    });
  }
}
