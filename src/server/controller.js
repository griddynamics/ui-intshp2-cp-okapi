const productsMOCK = require('../assets/mocks/products.json');
const filters = require('../assets/mocks/filters.json');
const banners = require('../assets/mocks/banners.json');
const slideshow = require('../assets/mocks/slideshow.json');
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const subscriptions = new Set();

module.exports = {
    getProducts,
    getProductById,
    getHomepage,
    addSubscription,
    deleteSubscription,
    getFilters,
    notFound,
}

function addSubscription(req, res) {
    if (!subscriptions.has(req.body.email) || !req.body.email.match(EMAIL_PATTERN)) {
        return res.status(400).send();
    }
    subscriptions.add(req.body.email);
    res.status(201).send();
}

function deleteSubscription(req, res) {
    if (!subscriptions.has(req.body.email)) return res.status(404).send();
    subscriptions.delete(req.body.email);
    res.status(202).send();
}

const PRODUCTS_REDUNDANT_PROPS = ['relatedProducts', 'description'];


function getHomepage(req, res) {
    const randomProducts = new Set();
    const productClone = JSON.parse(JSON.stringify(productsMOCK))
    while (Array.from(randomProducts).length !== 6) {
        const cleanedUpProduct = _cleanUpProductProperties(productClone[Math.floor(Math.random() * productsMOCK.length)])
        randomProducts.add(cleanedUpProduct)
    }

    const homePageAggregated = {
        slideshow,
        arrivals: Array.from(randomProducts),
        banners
    }

    res.json(homePageAggregated);
}

function getFilters(req, res) {
    const rangeFilter = filters.find(el => el.type === 'range');
    const productsSorted = JSON.parse(JSON.stringify(productsMOCK)).sort((a, b) => b.price - a.price);

    const mostExpencive = productsSorted[0].price
    const cheapest = productsSorted[productsSorted.length - 1].price;

    rangeFilter.range = [cheapest, mostExpencive];
    res.json(filters);
}

function getProducts(req, res) {
    const productsArrCopy = JSON.parse(JSON.stringify(productsMOCK));
    const responseProducts = {
        total: productsArrCopy.length,
        products: productsArrCopy
    }

    const query = req.query;
    let cleanedProducts = productsArrCopy.map(_cleanUpProductProperties);

    if (query.ids) {
        const idsArr = req.query.ids.split(',').map(el => parseInt(el));

        const productsArr = cleanedProducts.filter(el => idsArr.some(id => String(id) === el.id))
        responseProducts.products = productsArr;
        res.json(responseProducts);
        return;
    }

    if (query.price) {
        const rangeArr = req.query.price.split(',').map(el => parseInt(el));
        const fromPrice = Number(rangeArr[0]);
        const toPrice = Number(rangeArr[1]);

        if (rangeArr.length === 1 || (rangeArr.length === 2 && (fromPrice === toPrice))) {
            cleanedProducts = cleanedProducts.filter(({ price }) => price === fromPrice)
        }

        if (rangeArr.length === 2) {
            cleanedProducts = cleanedProducts.filter(({ price }) => price >= fromPrice && price <= toPrice)
        }
    }

    if (query.category) {
        const categoriesArr = query.category.split(',');
        cleanedProducts = cleanedProducts.filter(el => categoriesArr.some(category => category === el.category))
    }

    if (query.gender) {
        cleanedProducts = cleanedProducts.filter(el => el.sex === query.gender)
    }

    if (query.size) {
        const sizesArr = query.size.split(',');
        cleanedProducts = cleanedProducts.filter(el => el.sizes.some(size => sizesArr.includes(size.toLowerCase())))
    }

    if (query.brand) {
        const brandsArr = query.brand.split(',');
        cleanedProducts = cleanedProducts.filter(el => brandsArr.some(brand => brand === el.brand));
    }

    const total = cleanedProducts.length;
    responseProducts.total = total


    cleanedProducts = cleanedProducts.slice(+query.start || 0, +query.end || cleanedProducts.length);
    responseProducts.products = cleanedProducts
    res.json(responseProducts);
}

function getProductById(req, res) {
    let product = productsMOCK.find((({ id }) => id === req.params.id));

    if (!product) {
        notFound(req, res);
        return;
    };
    
    product = JSON.parse(JSON.stringify(product));

    product.relatedProducts = productsMOCK.filter(item => product.relatedProducts.some(id => id === item.id));

    res.json(product);
}

function notFound(req, res) {
    res.status(404).send();
}

function _cleanUpProductProperties(product) {
    const productClone = JSON.parse(JSON.stringify(product))
  PRODUCTS_REDUNDANT_PROPS.forEach(property => {
      delete productClone[property];
  });

  return productClone;
}
