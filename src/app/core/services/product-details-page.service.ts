import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/product';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsPageService {


  constructor(private dataService: DataService) {}

  getProduct(id: String): Observable<IProduct> {
    return this.dataService.get(`${environment.productsURL}/${id}`);
  }
}
