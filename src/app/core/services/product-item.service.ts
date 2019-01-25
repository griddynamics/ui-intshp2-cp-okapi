import { Injectable } from '@angular/core';
import { IProduct, ProductAvailabilityState, ProductSize } from 'src/app/shared/interfaces/product';
import { Observable, from, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductItemService {
  wishListArr: IProduct[];

  products: IProduct[] = [
    {
      id: '1',
      title: 'Reebock Track Jacket',
      price: '100$',
      rating: 2,
      // tslint:disable-next-line
      swatches: [{ 'color': 'red', 'imgSrc': '' }, { 'color': 'black', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg' }, { 'color': 'grey', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg' }, { 'color': 'blue', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg' }],
      availability: [ProductAvailabilityState.IN_STORE, ProductAvailabilityState.ONLINE_ONLY],
      thumbnailImageSrc: 'http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png',
      sizes: [ProductSize.S, ProductSize.M, ProductSize.L, ProductSize.XL],
      addedToCart: false,
      addedToWishList: false,
    },
    {
      id: '2',
      title: 'Reebock Track Jacket',
      price: '100$',
      rating: 4,
      // tslint:disable-next-line
      swatches: [{ 'color': 'red', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Limited%20Edition%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MX25_LRG.jpg' }, { 'color': 'black', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg' }, { 'color': 'grey', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg' }, { 'color': 'blue', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg' }],
      availability: [ProductAvailabilityState.IN_STORE, ProductAvailabilityState.ONLINE_ONLY],
      thumbnailImageSrc: 'http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png',
      sizes: [ProductSize.S, ProductSize.M, ProductSize.L, ProductSize.XL],
      addedToCart: false,
      addedToWishList: false,
    },
    {
      id: '3',
      title: 'Reebock Track Jacket',
      price: '100$',
      rating: 3,
      // tslint:disable-next-line
      swatches: [{ 'color': 'red', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Limited%20Edition%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MX25_LRG.jpg' }, { 'color': 'black', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg' }, { 'color': 'grey', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg' }, { 'color': 'blue', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg' }],
      availability: [ProductAvailabilityState.IN_STORE, ProductAvailabilityState.ONLINE_ONLY],
      thumbnailImageSrc: 'http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png',
      sizes: [],
      addedToCart: false,
      addedToWishList: false,
    },
    {
      id: '4',
      title: 'Reebock Track Jacket',
      price: '100$',
      rating: 4,
      // tslint:disable-next-line
      swatches: [{ 'color': 'red', 'imgSrc': '' }, { 'color': 'black', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg' }, { 'color': 'grey', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg' }, { 'color': 'blue', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg' }],
      availability: [ProductAvailabilityState.IN_STORE, ProductAvailabilityState.ONLINE_ONLY],
      thumbnailImageSrc: 'http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png',
      sizes: [ProductSize.S, ProductSize.M, ProductSize.L, ProductSize.XL],
      addedToCart: false,
      addedToWishList: false,
    },
    {
      id: '5',
      title: 'Reebock Track Jacket',
      price: '100$',
      rating: 4,
      // tslint:disable-next-line
      swatches: [{ 'color': 'red', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Limited%20Edition%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MX25_LRG.jpg' }, { 'color': 'black', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg' }, { 'color': 'grey', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg' }, { 'color': 'blue', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg' }],
      availability: [ProductAvailabilityState.IN_STORE, ProductAvailabilityState.ONLINE_ONLY],
      thumbnailImageSrc: 'http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png',
      sizes: [ProductSize.S, ProductSize.M, ProductSize.L, ProductSize.XL],
      addedToCart: false,
      addedToWishList: false,
    },
    {
      id: '6',
      title: 'Reebock Track Jacket',
      price: '100$',
      rating: 3,
      // tslint:disable-next-line
      swatches: [{ 'color': 'red', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Limited%20Edition%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MX25_LRG.jpg' }, { 'color': 'black', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg' }, { 'color': 'grey', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg' }, { 'color': 'blue', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg' }],
      availability: [ProductAvailabilityState.IN_STORE, ProductAvailabilityState.ONLINE_ONLY],
      thumbnailImageSrc: 'http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png',
      sizes: [],
      addedToCart: false,
      addedToWishList: false,
    },
    {
      id: '7',
      title: 'Reebock Track Jacket',
      price: '100$',
      rating: 4,
      // tslint:disable-next-line
      swatches: [{ 'color': 'red', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Limited%20Edition%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MX25_LRG.jpg' }, { 'color': 'black', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg' }, { 'color': 'grey', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg' }, { 'color': 'blue', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg' }],
      availability: [ProductAvailabilityState.IN_STORE, ProductAvailabilityState.ONLINE_ONLY],
      thumbnailImageSrc: '',
      sizes: [ProductSize.S, ProductSize.M, ProductSize.L, ProductSize.XL],
      addedToCart: false,
      addedToWishList: false,
    },
    {
      id: '8',
      title: 'Panties',
      price: '100$',
      rating: 4,
      // tslint:disable-next-line
      swatches: [{ 'color': 'green', 'imgSrc': 'https://dm.victoriassecret.com/p/404x539/tif/01/ff/01ff9cd22462499982c88a5ff7560112/383568A3K_OM_B.jpg' }, { 'color': 'pink', 'imgSrc': 'https://dm.victoriassecret.com/p/404x539/tif/12/cb/12cb23cf6b1749fc82cd855aaaafd139/383568GTE_OF_F.jpg' }, { 'color': 'grey', 'imgSrc': 'https://dm.victoriassecret.com/p/404x539/tif/1b/28/1b288f9876a64c4ea283a25aef06d46e/383568GRW_OF_F.jpg' }],
      availability: [ProductAvailabilityState.IN_STORE, ProductAvailabilityState.ONLINE_ONLY],
      thumbnailImageSrc: 'https://dm.victoriassecret.com/p/404x539/tif/01/ff/01ff9cd22462499982c88a5ff7560112/383568A3K_OM_B.jpg',
      sizes: [ProductSize.S, ProductSize.M, ProductSize.L, ProductSize.XL],
      addedToCart: false,
      addedToWishList: false,
    },
    {
      id: '9',
      title: 'Reebock Track Jacket',
      price: '100$',
      rating: 4,
      // tslint:disable-next-line
      swatches: [{ 'color': 'red', 'imgSrc': '' }, { 'color': 'black', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg' }, { 'color': 'grey', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg' }, { 'color': 'blue', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg' }],
      availability: [],
      thumbnailImageSrc: 'http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png',
      sizes: [ProductSize.S, ProductSize.M, ProductSize.L, ProductSize.XL],
      addedToCart: false,
      addedToWishList: false,
    }
  ];

  private productsSource = new BehaviorSubject([]);
  public productsSubscribers = this.productsSource.asObservable();

  constructor() {
    // create logic, that saves wished items in carousels heart
    this.wishListArr = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [];
    if (!localStorage.getItem('wishlist')) {
      localStorage.setItem('wishlist', '[]');
    }
    this.productsSource.next(this.wishListArr);
  }

  // returns products as a stream to emulate server behavior
  getProducts(): Observable<IProduct> {
    const wishListFromLS = JSON.parse(localStorage.getItem('wishlist'));
    const productsSynchronizedWithLS = this.products.map(el => {
      const currentItemInLS = wishListFromLS.find(e => el.id === e.id);
      return currentItemInLS ? currentItemInLS : el;
    });

    return from(productsSynchronizedWithLS);
  }

  public toggleProduct(item: IProduct): void {
    // adding product if it isn't in wishlist
    const itemMissingInLS = this.wishListArr.every(el => el.id !== item.id);
    if (itemMissingInLS) {
      this.wishListArr.unshift(item);
      this.setProductToLS(this.wishListArr);
      this.updateBS(this.wishListArr);
      return;
    }
    // removing item if it already exists in wishlist
    const indexOfItem = this.wishListArr.findIndex(el => el.id === item.id);
    this.wishListArr.splice(indexOfItem, 1);
    this.setProductToLS(this.wishListArr);
    this.updateBS(this.wishListArr);
  }

  // updatind of BehaviorSubject, that will be emited in wishlist component
  private updateBS(wishArr: IProduct[]): void {
    this.productsSource.next(wishArr);
  }

  // sets item to localStorage
  private setProductToLS(item: IProduct[]): void {
    localStorage.setItem('wishlist', JSON.stringify(item));
  }
}
