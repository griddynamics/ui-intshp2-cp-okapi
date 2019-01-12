import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductItemService {

  constructor(
    public http: HttpClient,
  ) { }

  getItem() {
    return this.http.get('http://www.mocky.io/v2/5c2f12d53200004800590600');
  }
}
