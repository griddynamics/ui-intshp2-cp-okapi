import { Component, OnInit, Input } from '@angular/core';
import { ProductItemService } from 'src/app/core/services/product-item.service';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  @Input() allProducts;

  public visibleWishItems = 3;
  public wishlist: IProduct[];

  constructor(
    private productItem: ProductItemService,
  ) { }

  ngOnInit() {
    this.productItem.productsSubscribers.subscribe(data => {
      this.wishlist = data;
    });
  }

  loadMoreHandler() {
    if (this.visibleWishItems >= this.wishlist.length) {
      this.visibleWishItems = 3;
      return;
    }
    this.visibleWishItems = this.allProducts;
  }
}
