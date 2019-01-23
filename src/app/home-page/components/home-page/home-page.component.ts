import { Component, OnInit } from '@angular/core';
import { IBanner } from 'src/app/shared/interfaces';
import { IProduct, ProductSize, ProductAvailabilityState } from 'src/app/shared/interfaces/product';
import { ProductItemService } from 'src/app/core/services/product-item.service';

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
    public productItemService: ProductItemService
  ) { }

  ngOnInit(): void {
    // getting data from service to display products in carousel
    this.productItemService.getProducts().subscribe(data => {
      this.products.push(data);
    });
  }

  public wishListHandler(product): void {
    // sending item, that was clicked to service
    this.productItemService.toggleProduct(product);
  }
}
