'use strict';

const express = require('express');
const controller = require('./controller');
const memcacheMiddleware = require('./memcache.middleware');
const router = express.Router();

router.get('/api/homepage', controller.getHomepage);
router.get('/api/filters', controller.getFilters);
router.get('/api/products/:id', controller.getProductById);
router.get('/api/products', memcacheMiddleware(), controller.getProducts);
router.post('/api/subscriptions', controller.addSubscription);
router.delete('/api/subscriptions', controller.deleteSubscription);
router.get('*', controller.notFound);

module.exports = router;
