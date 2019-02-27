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

  @Input() products: IProduct[] = [];
  private allProducts: IProduct[] = [];
  constructor(
    private productService: ProductsService,
    public context: ModalContext
   ) { }
  ngOnInit() {
    this.productService.getWishList().subscribe(data => {
      this.allProducts = data;
      this.products = data;
      console.log(this.products);
    });
  }
    // @ViewChild('wrapper') wrapper: ElementRef;
    // @Input() products: IProduct[] = [];
    // private allProducts: IProduct[] = [];
    // constructor(
    //   public context: ModalContext
    // ) { }
    // ngOnInit() {

    // }
//   constructor(public context: ModalContext) {}

//   ngOnInit() {
//   }

}
