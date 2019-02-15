'use strict';

const express = require('express');
const controller = require('./controller');
const memcacheMiddleware = require('./memcache.middleware');
const router = express.Router();

router.get('/api/homepage', memcacheMiddleware(), controller.getHomepage);
router.get('/api/filters', memcacheMiddleware(), controller.getFilters);
router.get('/api/products/:id', memcacheMiddleware(), controller.getProductById);
router.get('/api/products', memcacheMiddleware(), controller.getProducts);
router.post('/api/subscriptions', controller.addSubscription);
router.delete('/api/subscriptions', controller.deleteSubscription);
router.get('*', controller.notFound);

module.exports = router;
