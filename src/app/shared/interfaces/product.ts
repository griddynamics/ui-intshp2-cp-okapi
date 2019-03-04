export interface IProduct {
  id: String;
  title: String;
  price: number;
  brand?: String;
  description?: String;
  sex?: String;
  name?: String;
  rating?: Number;
  swatches?: Array<ISwatch>;
  availability: Array<ProductAvailabilityState>;
  thumbnailImageSrc?: string;
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

export interface IFilter {
  type: string;
  name: string;
  fields?: Array<string>;
  range?: Array<PriceRange>;
}

export enum PriceRange {
  min = 0,
  max = 1
}
