import { Component, OnInit } from '@angular/core';
import { IBanner } from 'src/app/shared/interfaces';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})


export class HomePageComponent implements OnInit {
  public products: IProduct[] = [];

  banners: IBanner[] = [{
    height: 100,
    width: 470,
    htmlSnippet: '<img style="width:100%" src="../../../../assets/img/adv_area.png" >',
  }, {
    height: 100,
    width: 470,
    htmlSnippet: '<img style="width:100%" src="../../../../assets/img/adv_area.png" >',
  }];


  constructor(
    public productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  public wishListHandler(product: IProduct): void {
    if (!product.addedToWishList) {
      this.productsService.addToWishList(product.id);
      return;
    }
    this.productsService.removeFromWishList(product.id);
  }
}
