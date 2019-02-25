import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { ModalContext } from '../modal/modal-context';
import { IProduct } from '../../interfaces/product';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.scss']
})
export class PopupWindowComponent implements OnInit {
    @ViewChild('wrapper') wrapper: ElementRef;
    @Input() products: IProduct[] = [];
    private allProducts: IProduct[] = [];
    public visibleWishItems = 3;
    constructor(
      private productService: ProductsService,
      public context: ModalContext
    ) { }
    ngOnInit() {
      this.productService.getWishList().subscribe(data => {
        this.allProducts = data;
        this.products = data.slice(0, this.visibleWishItems);
      });
    }
    onLoadMore(loadAmount: number): void {
      this.products = this.allProducts.slice(0, this.products.length + loadAmount);
    }
    get showLoadMore(): Boolean {
      if (!this.allProducts.length) { return false; }
      return this.allProducts.length > this.products.length;
    }
//   constructor(public context: ModalContext) {}

//   ngOnInit() {
//   }

}
