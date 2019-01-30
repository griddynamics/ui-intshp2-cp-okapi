import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsPageService {


  constructor(private mocks: DataService) {}

  getRelatedProducts() {
    return this.mocks.get('/assets/mocks/pdp.json');
  }
}
