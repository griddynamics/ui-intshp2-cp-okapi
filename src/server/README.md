## IMPLEMENTED API

## Supported next methods

- get
- post
- delete

## Supported next endpoints
get: 
/api/homepage 
/api/filters
/api/products/:id
/api/products
"*" - not found response

post:
/api/subscriptions

delete: 
/api/subscriptions

## How to use queryParams

/api/products?ids=1,2,3
looks for items, that have ids from queryParams
response:
{
  total: number,
  products: IProduct[] // length 3
}

/api/products?price=10,200
looks for items, that are in price sequence between 10 and 200
response:
{
  total: number,
  products: IProduct[]
}

/api/products?categories=t-shirt,short
returns products, that have t-shird or short category
{
  total: number,
  products: IProduct[]
}

/api/products?gender=man
returns only man's products
{
  total: number,
  products: IProduct[]
}

/api/products?size=l,s
returns products that have size l or s
{
  total: number,
  products: IProduct[]
}

/api/products?brand=nike,adidas
returns nike or adidas products
{
  total: number,
  products: IProduct[]
}

## How to combine queryParams? 
/api/products?gender=man&price=20,100



