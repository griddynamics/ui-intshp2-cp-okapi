import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../product';
import { ProductAvailabilityState } from '../../product';
import { ProductSize } from '../../product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  public currentColor;
  previewImg = false;
  defaultImg = true;
  hoverFull = false;
  showFull = true;
  hoverShort = false;
  showShort = true;
  placeholder = '../../../../assets/img/img-placeholder.png';
  @Input() public initShow: any;

  product: IProduct = {
    id: '1',
    title: 'Reebock Track Jacket',
    price: '100$',
    rating: 4,
    // tslint:disable-next-line
    swatches: [{ 'color': 'red', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Limited%20Edition%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MX25_LRG.jpg' }, { 'color': 'black', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg' }, { 'color': 'grey', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg' }, { 'color': 'blue', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg' }],
    availability: [ProductAvailabilityState.IN_STORE, ProductAvailabilityState.ONLINE_ONLY],
    thumbnailImageSrc: 'http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png',
    sizes: [ProductSize.S, ProductSize.M, ProductSize.L, ProductSize.XL],
    addedToCart: true,
    addedToWishList: true,
  };

  getRightImg() {
    return this.product.thumbnailImageSrc ? this.product.thumbnailImageSrc : this.placeholder;
  }

  getRightColorImg() {
    return this.currentColor.imgSrc ? this.currentColor.imgSrc : this.placeholder;
  }

  hoverStateIn() {
    this.hoverFull = true;
    this.showFull = false;
    this.hoverShort = true;
    this.showShort = false;
  }

  hoverStateOut() {
    this.hoverFull = false;
    this.showFull = true;
    this.hoverShort = false;
    this.showShort = true;
  }

  setDefaultImg() {
    this.defaultImg = true;
    this.previewImg = false;
    this.currentColor = null;
  }

  public setColor = (color) => {
    if (this.currentColor === color) {
      return;
    }
    this.currentColor = color;
    this.defaultImg = false;
    this.previewImg = true;
  }

  constructor(
  ) {
  }

  ngOnInit() {
  }
}
