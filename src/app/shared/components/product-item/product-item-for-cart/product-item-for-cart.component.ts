import { Component, OnInit, Input } from '@angular/core';
import { ProductItemComponent } from '../product-item.component';
import { ProductsService } from 'src/app/core/services/products.service';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product-item-for-cart',
  templateUrl: './product-item-for-cart.component.html',
  styleUrls: ['./product-item-for-cart.component.scss']
})
export class ProductItemForCartComponent implements OnInit {

  // @Input() product;
  // starsArray = Array(4).fill(null).map((x, i) => i);
  // isHovered = false;
  quantity = 2;
  clicks = 0;


  @Input() products: IProduct[] = [];
  private allProducts: IProduct[] = [];
  constructor ( private productService: ProductsService) { }
  ngOnInit() {
    this.productService.getWishList().subscribe(data => {
      this.allProducts = data;
      this.products = data;
      console.log(this.products);
    });
  }

  onChanged(increased) {
      increased === true ? this.clicks++ : this.clicks--;
  }

  // @Input() product;
  // _currentThumbnail;
  // starsArray = Array(4).fill(null).map((x, i) => i);
  // isHovered = false;

  plus(index) {
  this.quantity ++;
  // console.log(this.price);
  }

  minus(index) {
    if (this.quantity > 1) {
      this.quantity --;
    }
  }

  // handleImgView(isHovered): void {
  //   this.isHovered = isHovered;
  // }

  // get currentThumbnail(): string {
  //   return this._currentThumbnail;
  // }

  // set currentThumbnail(value: string) {
  //   this._currentThumbnail = value || '';
  // }

}
