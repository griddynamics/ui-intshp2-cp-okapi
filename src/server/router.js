'use strict';

let express = require('express');
let controller = require('./controller');
let router = express.Router();

// router.get('/api/homepage', memcacheMiddleWare, controller.getHomepage);
router.get('/api/homepage', controller.getHomepage);
router.get('/api/products/:id', controller.getProductById);
router.get('/api/products', controller.getProducts);
router.post('/api/subscriptions', controller.addSubscription);
router.delete('/api/subscriptions', controller.deleteSubscription);
router.get('*', controller.notFound);

module.exports = router;