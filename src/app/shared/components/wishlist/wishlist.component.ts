import { Component, OnInit, Input } from '@angular/core';
import { ProductItemService } from 'src/app/core/services/product-item.service';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  @Input() allProducts: number;

  public visibleWishItems: number;
  public viewPortForItems: number;
  public wishlist: IProduct[];

  constructor(
    private productItem: ProductItemService,
  ) { }

  ngOnInit() {
    this.productItem.productsSubscribers.subscribe(data => {
      this.wishlist = data;
    });

    // here some logic how to handle visibleWishItems count depending on parent width
    this.viewPortForItems = window.innerWidth <= 1024 ? 2 : 3;
    this.visibleWishItems = this.viewPortForItems;
  }

  public loadMoreHandler(): void {
    this.visibleWishItems = this.allProducts;
  }
}
