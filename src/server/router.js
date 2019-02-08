'use strict';

let express = require('express');
let controller = require('./controller');
let router = express.Router();

router.get('/api/products/:id', controller.getProductById);
router.get('/api/products', controller.getProducts);
router.get('*', controller.notFound);

module.exports = router;