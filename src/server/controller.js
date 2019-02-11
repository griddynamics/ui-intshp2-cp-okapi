const productsMOCK = require('../assets/mocks/products.json');

// const cacheMap = new Map();

module.exports = {
    getProducts,
    getProductById,
    notFound,
}

const PRODUCTS_REDUNDANT_PROPS = ['relatedProducts', 'description'];

function cleanUpProductProperties(product) {
    PRODUCTS_REDUNDANT_PROPS.forEach(property => {
        delete product[property];
    });

    return product;
}

function getProducts(req, res) {
    const productsArrCopy = JSON.parse(JSON.stringify(productsMOCK));
    const query = req.query;
    let cleanedProducts = productsArrCopy.map(cleanUpProductProperties);

    if (query.ids) {
        const idsArr = req.query.ids.split(',');
        const productsArr = cleanedProducts.filter(el => idsArr.some(id => id === el.id))
        res.json(productsArr);
        return;
    }
    
    if (query.max) {
        cleanedProducts = cleanedProducts.filter(el => el.price <= Number(query.max))
    }

    if (query.min) {
        cleanedProducts = cleanedProducts.filter(el => el.price >= Number(query.min))
    }

    if (query.category) {
        cleanedProducts = cleanedProducts.filter(el => el.sex === query.category)
    }

    if (query.size) {
        const sizesArr = query.size.split(',');
        cleanedProducts = cleanedProducts.filter(el => el.sizes.some(size => sizesArr.includes(size.toLowerCase())))
    }

    if (query.brand) {
        cleanedProducts = cleanedProducts.filter(el => el.brand === query.brand);
    }

    cleanedProducts = cleanedProducts.slice(+query.start || 0, +query.end || cleanedProducts.length);

    res.json(cleanedProducts);
}

function getProductById(req, res) {
    const product = JSON.parse(JSON.stringify(productsMOCK.find((({ id }) => id === req.params.id))));

    if(!product) notFound(req, res);

    product.relatedProducts = productsMOCK.filter(item => product.relatedProducts.some(id => id === item.id));

    res.json(product);
}

function notFound(req, res) {
    res.status(404).send();
}
