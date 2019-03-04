export interface IProduct {
  id: string;
  title?: string;
  price: number;
  brand?: string;
  description?: string;
  sex?: string;
  name: string;
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
  color: string;
  imgSrc?: string;
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

export interface ICartProduct {
  id: string;
  name: string;
  quantity?: number;
  swatch?: string;
  price?: number;
  defaultPrice?: number;
  size?: ProductSize;
}
