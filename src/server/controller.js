const productsMOCK = require('../assets/mocks/products.json');

const subscriptions = new Set();

module.exports = {
    getProducts,
    getProductById,
    getHomepage,
    addSubscription,
    deleteSubscription,
    notFound,
}


function addSubscription(req, res) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!subscriptions.has(req.body.email) || !req.body.email.match(emailPattern)) {
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
    while (Array.from(randomProducts).length !== 6) {
        const cleanedUpProduct = cleanUpProductProperties(productsMOCK[Math.floor(Math.random() * productsMOCK.length)])
        randomProducts.add(cleanedUpProduct)
    }

    const homePageAggregated = {
        newArrivals: Array.from(randomProducts),
        slideShow: [
            'https://myupdateweb.com/wp-content/uploads/2017/07/Bluehost.com_-1-1540x650.png',
            'http://forgedground.com/image/cache/catalog/Slideshow/forged-ground-featured-official-merch-es-1540x650.jpg',
            'http://forgedground.com/image/cache/catalog/viking-medieval-escudos-cascos-cuernos-espadass-accesorios-forgedground-1540x650.jpg',
            'http://www.opencart.lionode.com/leoc04_2_2018/oc01/image/cache/catalog/banner%20main1-1540x650.jpg',
            'http://www.opencart.lionode.com/leoc04_2_2018/oc01/image/cache/catalog/banner%20main2-1540x650.jpg'
        ],
        advArray: [{
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

    if (query.price) {
        const rangeArr = req.query.price.split(',');
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

    if (!product) notFound(req, res);

    product.relatedProducts = productsMOCK.filter(item => product.relatedProducts.some(id => id === item.id));

    res.json(product);
}

function notFound(req, res) {
    res.status(404).send();
}
