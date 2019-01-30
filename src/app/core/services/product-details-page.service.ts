import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsPageService {


  constructor(private dataService: DataService) {}

  getProduct(id: String) {
    return this.dataService.get('/assets/mocks/pdp.json');
  }
}
