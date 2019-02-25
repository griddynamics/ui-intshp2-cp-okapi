import { IProduct } from 'src/app/shared/interfaces/product';

export function addToCartDecorator(product: IProduct, ids: String[]): IProduct {
  product.addedToCart = ids.includes(product.id);
  return product;
}

export function wishListDecorator(product: IProduct, ids: String[]): IProduct {
  product.addedToWishList = ids.includes(product.id);
  return product;
}
