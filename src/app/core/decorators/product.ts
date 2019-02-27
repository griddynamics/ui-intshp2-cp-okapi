import { IProduct } from 'src/app/shared/interfaces/product';

export function addToCartDecorator(product: IProduct, ids): IProduct {
  const res = ids.findIndex(el => el.id === product.id);
  product.addedToCart = res === -1 ? false : true;
  return product;
}

export function wishListDecorator(product: IProduct, ids: String[]): IProduct {
  product.addedToWishList = ids.includes(product.id);
  return product;
}
