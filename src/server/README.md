# API

## Supported next endpoints
### GET api/homepage
aggregated route which returns home-page data

**Response**

*Status Code: 200*

```ts
{
  slideshow: String[],
  arrivals: IProduct[]  
  banners: IBanner[]
}
```

- [product interface](https://github.com/griddynamics/ui-intshp2-cp-okapi/blob/development/src/app/shared/interfaces/product.ts)
- [banner interface](https://github.com/griddynamics/ui-intshp2-cp-okapi/blob/development/src/app/shared/interfaces/index.ts)

### POST api/subscriptions
add email to subscriptions

***Request body***
```json
{ email: 'example@domain.com' }
```
***Response***

*Status Code: 201* - in case subscription added

*Status Code: 400* - already added

### DELETE api/subscriptions
delete email from subscriptions

***Request body***
```json
{ email: 'example@domain.com' }
```
***Response***

*Status Code: 202* - Accepted

*Status Code: 404* - email has not been found

### GET api/products
returns products list

***Response***

*Status Code: 200*

```json
{
"total": number,
"products": IProduct[]
}
```

[product interface](https://github.com/griddynamics/ui-intshp2-cp-okapi/blob/development/src/app/shared/interfaces/product.ts)

#### Supported queries:
`ids=1,2,3`

returns products list with passed id values;

`price=10,100`

returns products list each item's price is satisfied by range condition. If only 1 value has passed, returns the products with specific price;

`categories=t-shirt,shoes`

returns products list with certain categories

`gender=man`

returns products list for certain gender

`size=l,s`

returns products with certain sizes

`brand=nike,adidas`

returns products by certain brands

Example `api/products?gender=man&price=20,100`

### GET product/:id
returns product details including related products, description etc.

***Response***

*Status Code: 200*
```ts
IProduct
```

[product interface](https://github.com/griddynamics/ui-intshp2-cp-okapi/blob/development/src/app/shared/interfaces/product.ts)

### GET api/filters
returns filters list

***Response***

*Status Code: 200*

Example:
```ts
[
  {
      "type": "radio",
      "name": "gender",
      "fields": ["man", "woman", "children"]
  },
  {
      "type": "checkbox",
      "name": "category",
      "fields": ["t-shirts", "shoes", "shorts"]
  },
  {
      "type": "checkbox",
      "name": "size",
      "fields": ["s", "m", "l", "xl"]
  },
  {
      "type": "range",
      "name": "price",
      "range": []
  },
  {
      "type": "checkbox",
      "name": "brand",
      "fields": ["nike", "adiddas", "reebok", "active"]
  }
]
```

[filter interface](https://github.com/griddynamics/ui-intshp2-cp-okapi/blob/development/src/app/shared/interfaces/product.ts#L36)



