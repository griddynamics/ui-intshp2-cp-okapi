import { IProduct, ICartProduct } from '../interfaces/product';

export function addToCartDecorator(product: IProduct, cartProducts: ICartProduct[] = []): IProduct {
  product.addedToCart = !!cartProducts.find(({id}) => product.id === id);
  return product;
}

export function wishListDecorator(product: IProduct, ids: String[] = []): IProduct {
  product.addedToWishList = ids.includes(product.id);
  return product;
}
