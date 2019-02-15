const productsMOCK = require('../assets/mocks/products.json');
const filters = require('../assets/mocks/filters.json');
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


function cleanUpProductProperties(product) {
    PRODUCTS_REDUNDANT_PROPS.forEach(property => {
        delete product[property];
    });

    return product;
}

function getHomepage(req, res) {
    const randomProducts = new Set();
    while (Array.from(randomProducts).length !== 6) {
        const cleanedUpProduct = _cleanUpProductProperties(productsMOCK[Math.floor(Math.random() * productsMOCK.length)])
        randomProducts.add(cleanedUpProduct)
    }

    const homePageAggregated = {
        slideshow: [
            'assets/img/slideshow/banner-main1-1540x650.jpg',
            'assets/img/slideshow/banner-main2-1540x650.jpg',
            'assets/img/slideshow/forged-ground-featured-official-merch-es-1540x650',
            'assets/img/slideshow/forged-ground-featured-official-merch-es-1540x650',
        ],
        arrivals: Array.from(randomProducts),
        banners: [{
            height: 100,
            width: 470,
            htmlSnippet: '<img style="width:100%" src="../../../../assets/img/adv_area.png" >',
        }, {
            height: 100,
            width: 470,
            htmlSnippet: '<img style="width:100%" src="../../../../assets/img/adv_area.png" >',
        }]
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
    const total = productsArrCopy.length;
    const responseProducts = {
        total,
        products: productsArrCopy
    }

    const query = req.query;
    let cleanedProducts = productsArrCopy.map(cleanUpProductProperties);

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
        cleanedProducts = cleanedProducts.filter(el => el.category === query.category)
    }

    if (query.gender) {
        cleanedProducts = cleanedProducts.filter(el => el.sex === query.gender)
    }

    if (query.size) {
        const sizesArr = query.size.split(',');
        cleanedProducts = cleanedProducts.filter(el => el.sizes.some(size => sizesArr.includes(size.toLowerCase())))
    }

    if (query.brand) {
        cleanedProducts = cleanedProducts.filter(el => el.brand === query.brand);
    }

    cleanedProducts = cleanedProducts.slice(+query.start || 0, +query.end || cleanedProducts.length);
    responseProducts.products = cleanedProducts
    res.json(responseProducts);
}

function getProductById(req, res) {
    const product = JSON.parse(JSON.stringify(productsMOCK.find((({ id }) => id === req.params.id))));

    if (!product) {
        notFound(req, res);
        return;
    };

    product.relatedProducts = productsMOCK.filter(item => product.relatedProducts.some(id => id === item.id));

    res.json(product);
}

function notFound(req, res) {
    res.status(404).send();
}

function _cleanUpProductProperties(product) {
  PRODUCTS_REDUNDANT_PROPS.forEach(property => {
      delete product[property];
  });

  return product;
}