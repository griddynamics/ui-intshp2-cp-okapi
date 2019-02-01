import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsPageService {


  constructor(private dataService: DataService) {}

  getProduct(id: String): Observable<IProduct> {
    return this.dataService.get('/assets/mocks/pdp.json', {id});
  }
}
