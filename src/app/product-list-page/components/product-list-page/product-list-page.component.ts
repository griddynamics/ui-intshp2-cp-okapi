import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  products = [];

    constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

}
