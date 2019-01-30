export interface IProduct {
  id: String;
  title: String;
  price: String;
  rating?: Number;
  swatches?: Array<ISwatch>;
  availability: Array<ProductAvailabilityState>;
  thumbnailImageSrc?: String;
  sizes?: Array<ProductSize>;
  addedToCart: Boolean;
  addedToWishList: Boolean;
  relatedProducts?: Array<IProduct>;
}

export interface ISwatch {
  color: String;
  imgSrc?: String;
}

export enum ProductAvailabilityState {
  IN_STORE = 1,
  ONLINE_ONLY = 2
}

export enum ProductSize {
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl'
}
