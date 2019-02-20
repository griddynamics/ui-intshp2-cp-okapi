import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductsService } from 'src/app/core/services/products.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  products: IProduct[] = [];
  private allProducts: number;
  visibleItems = 9;
  public link = `api/products?`;
  public subLinksArr: string[] = [];
  public subLinksStr = '';
  public checkedItemLink = '';

  constructor(
    private productService: ProductsService,
    private dataService: DataService
  ) { }


  brand: any[] = [];
  testUrl = 'api/products?';

  public prevRangeValue: string;
  public prevGenderValue: string;
  public urlArr = [];

  ngOnInit() {
    this.dataService.get('api/products?end=9').subscribe(data => {
      this.allProducts = data.total;
      this.products = data.products;
    });
  }

  public wishListHandler(product: IProduct): void {
    this.productService.toggleWishListProduct(product);
  }

  onLoadMore(loadAmount: number): void {
    this.dataService.get(`api/products?start=${this.products.length}&end=${this.products.length + this.visibleItems}`).subscribe(data => {
      this.products = [...this.products, ...data.products];
    });
  }

  get showLoadMore(): Boolean {
    if (!this.allProducts) { return false; }
    return this.products.length >= this.visibleItems;
  }




  public onFilterChange(event) {
    const filterNameArr = [];
    const fieldsArr = [];


    //   if(event.isChecked) {
    //     this..push(event.filterName)
    //     test.push(event.field);
    //     this.brand.push(test)
    //   } else {
    //     console.log(this.brand)
    //   }
    // }

    // // if(!this.brand.includes(event.filterName)) {

    //   if(event.isChecked) {
    //     this.brand.push(event.filterName)
    //     test.push(event.field);
    //     this.brand.push(test)
    //   } else {
    //     console.log(this.brand)
    //   }
    // }

    // } else {
    //   const cat = this.brand.indexOf(event.filterName);
    //   // let idx;
    //   let idx = this.brand[cat + 1].length - 1
    //   if(event.isChecked) {
    //     this.brand[cat + 1].push(event.field)
    //   } else {
    //     this.brand[cat + 1].splice(idx,1);
    //   }
    // }
    //  console.log(this.brand)
    //  this.brand.forEach(el => {
    //    if(typeof el === 'string' && !this.testUrl.includes(el)) {
    //     this.testUrl+=el
    //     // console.log(this.testUrl, el, 'if');
    //    } else {
    //      const test = el.join(',')
    //      this.testUrl+=test;
    //     //  console.log(this.testUrl, el, 'else');

    //     }
    //   })
    //   console.log(this.testUrl);

// console.log(event);
//     if (event.filterName === 'price') {
//       let priceRange = `${event.filterName}=${event.field}&`;
//       if (!this.link.includes(event.filterName)) {
//         this.link += priceRange;
//       } else {
//         this.link = this.link.replace(this.prevRangeValue, `${event.filterName}=${event.field}&`)
//       }
//       this.prevRangeValue = priceRange;
//       this.dataService.get(this.link).subscribe(data => {
//         this.products = data.products
//       })
//       console.log(this.link)
//       return
//     }
//     if (event.filterName === 'category' || event.filterName === 'sizes' || event.filterName === 'brand') {
//       console.log('here');
//       // console.log(event.filterName);
//       if (event.isChecked === true) {
//         if (this.link.includes(event.filterName)) {
//           this.link = this.link.replace(`${event.filterName}=`, `${event.filterName}=${event.field},`)
//         } else {
//           this.checkedItemLink = `${event.filterName}=${event.field}&`;
//           this.link += this.checkedItemLink;
//         }
//       } else {
//         this.checkedItemLink = `${event.field}`;
//         this.link = this.link.replace(this.checkedItemLink, '')
//       }
//       this.link = this.link.replace(',,', '');
//       this.dataService.get(this.link).subscribe(data => {
//         this.products = data.products
//       })
//       console.log(this.link)
//       return
//     }
//     if (event.filterName === 'gender') {
//       let genderValue = `${event.filterName}=${event.field}&`;
//       if (this.link.includes(event.filterName)){
//         this.link = this.link.replace(this.prevGenderValue, genderValue)
//       } else {
//         this.link += genderValue;
//       }
//       this.prevGenderValue = genderValue;
//       this.dataService.get(this.link).subscribe(data => {
//         this.products = data.products
//       })
//       console.log(this.link)
//       return
//     }
  }

}
