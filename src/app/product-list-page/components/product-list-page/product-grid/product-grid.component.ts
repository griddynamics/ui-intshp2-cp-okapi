import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  @Input() products;
  visibleItems = 9;


  testFunc(e) {
    this.visibleItems += e;
  }
  constructor() { }

  ngOnInit() {
  }

}
