import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes } from '@angular/router';
import { environment } from '../environments/environment';

const _routes: Routes = [
  { path: '', loadChildren: './home-page/home-page.module#HomePageModule' },
  { path: 'home', loadChildren: './home-page/home-page.module#HomePageModule' },
  { path: 'products', loadChildren: './product-list-page/product-list-page.module#ProductListPageModule' },
  { path: 'products/:id', loadChildren: './product-details-page/product-details-page.module#ProductDetailsPageModule' }
];

const notFoundRoute = { path: '**', component: PageNotFoundComponent };

const _environmentRoutes = environment.production ? [notFoundRoute] : [
  { path: 'environment', loadChildren: './environment/environment.module#EnvironmentModule' },
  notFoundRoute
];

export const routes = [
  ..._routes,
  ..._environmentRoutes
];


// [
//   {
//     "id": "1",
//     "name": "Reebock Track Jacket",
//     "title": "Reebock + Reebock",
//     "description": "lorem lorem lorem",
//     "price": 100,
//     "rating": 2,
//     "swatches": [
//       {
//         "color": "red",
//         "imgSrc": ""
//       },
//       {
//         "color": "black",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg"
//       },
//       {
//         "color": "grey",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg"
//       },
//       {
//         "color": "blue",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg"
//       }
//     ],
//     "availability": [
//       1,
//       2
//     ],
//     "thumbnailImageSrc": "http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png",
//     "sizes": [
//       "S",
//       "M",
//       "L",
//       "XL"
//     ],
//     "addedToCart": false,
//     "addedToWishList": false,
//     "relatedProducts": [
//       "2",
//       "7",
//       "8",
//       "9"
//     ]
//   },
//   {
//     "id": "2",
//     "name": "Reebock Track Jacket",
//     "title": "Reebock + Reebock",
//     "description": "lorem lorem lorem",
//     "price": 100,
//     "rating": 2,
//     "swatches": [
//       {
//         "color": "red",
//         "imgSrc": ""
//       },
//       {
//         "color": "black",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg"
//       },
//       {
//         "color": "grey",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg"
//       },
//       {
//         "color": "blue",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg"
//       }
//     ],
//     "availability": [
//       1,
//       2
//     ],
//     "thumbnailImageSrc": "http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png",
//     "sizes": [
//       "S",
//       "M",
//       "L",
//       "XL"
//     ],
//     "addedToCart": false,
//     "addedToWishList": false,
//     "relatedProducts": [
//       "5",
//       "7",
//       "3",
//       "9"
//     ]
//   },
//   {
//     "id": "3",
//     "name": "Reebock Track Jacket",
//     "title": "Reebock + Reebock",
//     "description": "lorem lorem lorem",
//     "price": 100,
//     "rating": 2,
//     "swatches": [
//       {
//         "color": "red",
//         "imgSrc": ""
//       },
//       {
//         "color": "black",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg"
//       },
//       {
//         "color": "grey",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg"
//       },
//       {
//         "color": "blue",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg"
//       }
//     ],
//     "availability": [
//       1,
//       2
//     ],
//     "thumbnailImageSrc": "http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png",
//     "sizes": [
//       "S",
//       "M",
//       "L",
//       "XL"
//     ],
//     "addedToCart": false,
//     "addedToWishList": false,
//     "relatedProducts": [
//       "5",
//       "7",
//       "2",
//       "9"
//     ]
//   },
//   {
//     "id": "4",
//     "name": "Reebock Track Jacket",
//     "title": "Reebock + Reebock",
//     "description": "lorem lorem lorem",
//     "price": 100,
//     "rating": 2,
//     "swatches": [
//       {
//         "color": "red",
//         "imgSrc": ""
//       },
//       {
//         "color": "black",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg"
//       },
//       {
//         "color": "grey",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg"
//       },
//       {
//         "color": "blue",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg"
//       }
//     ],
//     "availability": [
//       1,
//       2
//     ],
//     "thumbnailImageSrc": "http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png",
//     "sizes": [
//       "S",
//       "M",
//       "L",
//       "XL"
//     ],
//     "addedToCart": false,
//     "addedToWishList": false,
//     "relatedProducts": [
//       "5",
//       "7",
//       "3",
//       "9"
//     ]
//   },
//   {
//     "id": "5",
//     "name": "Reebock Track Jacket",
//     "title": "Reebock + Reebock",
//     "description": "lorem lorem lorem",
//     "price": 100,
//     "rating": 2,
//     "swatches": [
//       {
//         "color": "red",
//         "imgSrc": ""
//       },
//       {
//         "color": "black",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg"
//       },
//       {
//         "color": "grey",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg"
//       },
//       {
//         "color": "blue",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg"
//       }
//     ],
//     "availability": [
//       1,
//       2
//     ],
//     "thumbnailImageSrc": "http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png",
//     "sizes": [
//       "S",
//       "M",
//       "L",
//       "XL"
//     ],
//     "addedToCart": false,
//     "addedToWishList": false,
//     "relatedProducts": [
//       "6",
//       "7",
//       "3",
//       "9"
//     ]
//   },
//   {
//     "id": "6",
//     "name": "Reebock Track Jacket",
//     "title": "Reebock + Reebock",
//     "description": "lorem lorem lorem",
//     "price": 100,
//     "rating": 2,
//     "swatches": [
//       {
//         "color": "red",
//         "imgSrc": ""
//       },
//       {
//         "color": "black",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg"
//       },
//       {
//         "color": "grey",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg"
//       },
//       {
//         "color": "blue",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg"
//       }
//     ],
//     "availability": [
//       1,
//       2
//     ],
//     "thumbnailImageSrc": "http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png",
//     "sizes": [
//       "S",
//       "M",
//       "L",
//       "XL"
//     ],
//     "addedToCart": false,
//     "addedToWishList": false,
//     "relatedProducts": [
//       "5",
//       "7",
//       "3",
//       "9"
//     ]
//   },
//   {
//     "id": "7",
//     "name": "Reebock Track Jacket",
//     "title": "Reebock + Reebock",
//     "description": "lorem lorem lorem",
//     "price": 100,
//     "rating": 2,
//     "swatches": [
//       {
//         "color": "red",
//         "imgSrc": ""
//       },
//       {
//         "color": "black",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg"
//       },
//       {
//         "color": "grey",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg"
//       },
//       {
//         "color": "blue",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg"
//       }
//     ],
//     "availability": [
//       1,
//       2
//     ],
//     "thumbnailImageSrc": "http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png",
//     "sizes": [
//       "S",
//       "M",
//       "L",
//       "XL"
//     ],
//     "addedToCart": false,
//     "addedToWishList": false,
//     "relatedProducts": [
//       "5",
//       "6",
//       "3",
//       "9"
//     ]
//   },
//   {
//     "id": "8",
//     "name": "Reebock Track Jacket",
//     "title": "Reebock + Reebock",
//     "description": "lorem lorem lorem",
//     "price": 100,
//     "rating": 2,
//     "swatches": [
//       {
//         "color": "red",
//         "imgSrc": ""
//       },
//       {
//         "color": "black",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg"
//       },
//       {
//         "color": "grey",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg"
//       },
//       {
//         "color": "blue",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg"
//       }
//     ],
//     "availability": [
//       1,
//       2
//     ],
//     "thumbnailImageSrc": "http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png",
//     "sizes": [
//       "S",
//       "M",
//       "L",
//       "XL"
//     ],
//     "addedToCart": false,
//     "addedToWishList": false,
//     "relatedProducts": [
//       "5",
//       "6",
//       "3",
//       "9"
//     ]
//   },
//   {
//     "id": "9",
//     "name": "Reebock Track Jacket",
//     "title": "Reebock + Reebock",
//     "description": "lorem lorem lorem",
//     "price": 100,
//     "rating": 2,
//     "swatches": [
//       {
//         "color": "red",
//         "imgSrc": ""
//       },
//       {
//         "color": "black",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg"
//       },
//       {
//         "color": "grey",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg"
//       },
//       {
//         "color": "blue",
//         "imgSrc": "http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg"
//       }
//     ],
//     "availability": [
//       1,
//       2
//     ],
//     "thumbnailImageSrc": "http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png",
//     "sizes": [
//       "S",
//       "M",
//       "L",
//       "XL"
//     ],
//     "addedToCart": false,
//     "addedToWishList": false,
//     "relatedProducts": [
//       "5",
//       "6",
//       "3",
//       "1"
//     ]
//   }
// ]