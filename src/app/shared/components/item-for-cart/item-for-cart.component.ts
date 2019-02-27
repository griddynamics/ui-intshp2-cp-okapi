// import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
// import { IProduct } from '../../interfaces/product';
// import { ProductsService } from 'src/app/core/services/products.service';

// @Component({
//   selector: 'app-item-for-cart',
//   templateUrl: './item-for-cart.component.html',
//   styleUrls: ['./item-for-cart.component.scss']
// })
// export class ItemForCartComponent implements OnInit {

//  //  @ViewChild('wrapper') wrapper: ElementRef;
//  count = 0;
// //  public productOne = {
// //   quantity: 2,
// //   // tslint:disable-next-line:max-line-length
// // tslint:disable-next-line:max-line-length
// tslint:disable-next-line:max-line-length
//  imgSrc: 'https://assets.reebok.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/be70507ba2214aedbe54a984011e860a_9366/Workout_Plus_ATI_90s_Multicolor_DV5494_01_standard.jpg'
// // };
//   @Input() products: IProduct[] = [];
//   private allProducts: IProduct[] = [];
//   constructor(
//     private productService: ProductsService,
//    ) { }
//   ngOnInit() {
//     this.productService.getWishList().subscribe(data => {
//       this.allProducts = data;
//       this.products = data;
//       console.log(this.products);
//     });
//   }

//   // public plus(): void {
//   //   this.productOne.quantity++;
//   //  // this.productConfiguration.price += this.product.price;
//   // }

//   // public minus(): void {
//   //   if (this.productOne.quantity > 1) {
//   //     this.productOne.quantity--;
//   //   //  this.productConfiguration.price -= this.product.price;
//   //   }
//   // }

//   DecreaseVal(prod: Products) {
//     if (prod.count > 1) {
//        prod.count --;
//     }
// }

// IncreaseVal(prod: Product) {
//     if (prod.count < 5) {
//        prod.count ++;
//     }
// }

// }
