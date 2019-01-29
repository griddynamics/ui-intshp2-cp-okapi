import { Component, OnInit } from '@angular/core';
import { IProduct, ProductAvailabilityState, ProductSize } from 'src/app/shared/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { RecentlyViewedService } from 'src/app/shared/components/recently-viewed/recently-viewed.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  id: number;
  LS: [];
  newLocal;
  products: IProduct;
  title: string;

  productInfo = {
    id: '1',
    name: 'Reebock Track Jacket',
    price: '100$',
    rating: 2,
    // tslint:disable-next-line
    swatches: [{ 'color': 'red', 'imgSrc': '' }, { 'color': 'black', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg' }, { 'color': 'grey', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg' }, { 'color': 'blue', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg' }],
    availability: [ProductAvailabilityState.IN_STORE, ProductAvailabilityState.ONLINE_ONLY],
    thumbnailImageSrc: 'http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png',
    sizes: [ProductSize.S, ProductSize.M, ProductSize.L, ProductSize.XL],
    addedToCart: false,
    addedToWishList: true,
    title: 'Half Jacket + Skiny Trousers + Boot leather',
    description: 'Lorem Lorem Lorem',
  };

  // constructor(
  //   private recView: RecentlyViewedService,
  //   private route: ActivatedRoute,
  // ) {}

  ngOnInit() {
//  this.recView.changeMessage(this.productInfo);
   localStorage.setItem('some', JSON.stringify(this.productInfo));
//  this.id = +this.route.snapshot.paramMap.get('id');
//  this.recView.setObject(this.id);

 // let condition = JSON.parse(localStorage.getItem('myprod'));
    //   this.newLocal = localStorage.setItem('myprod', JSON.stringify(this.productInfo));
    //  // console.log(localStorage.setItem('myprod', JSON.stringify(this.productInfo)));
    //   console.log(this.newLocal);
      //  this.LS.push(JSON.parse(this.newLocal));
 // localStorage.setItem('myprod', JSON.stringify(this.productInfo));
 // console.log(localStorage.getItem('myprod'));


 // const LSarr = JSON.parse(localStorage.getItem('recentlyViewed'));
 //   LSarr.push(item);
//   localStorage.setItem('recentlyViewed', JSON.stringify(LSarr));
  }
}
