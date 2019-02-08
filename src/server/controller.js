const productsMOCK = require('../assets/mocks/products.json');

// const cacheMap = new Map();

module.exports = {
    getProducts,
    getProductById,
    notFound,
}

function getProducts(req, res) {
    const productsArrCopy = JSON.parse(JSON.stringify(productsMOCK));

    const dataWithoutRelatedProducts = productsArrCopy.map(el => {
        el.relatedProducts = null
        return el
    });

    if(req.query.ids) {
        const idsArr = req.query.ids.split(',');
        const productsArr = dataWithoutRelatedProducts.filter(el => idsArr.some(id => id === el.id))
        res.json(productsArr);
        return
    }
    
    res.json(dataWithoutRelatedProducts);
    //filters here
}

function getProductById(req, res) {
    const arr = JSON.parse(JSON.stringify(productsMOCK));

    const product = arr.find((({ id }) => id === req.params.id));    

    arr.forEach(item => {
        if (item.id !== req.params.id) {
            item.relatedProducts = null;
        }
    });

    product.relatedProducts = arr.filter(item => {
        return product.relatedProducts.some(el => el === item.id)
    });

    product ? res.json(product) : notFound(req, res); 
}

function notFound(req, res) {
    res.status(404).send();
}
