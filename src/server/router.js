'use strict';

let express = require('express');
let controller = require('./controller');
let router = express.Router();

const memCache = new Map();


function memCacheMiddlerware() {
  return (req, res, next) => {
    const key = '__memcachekey__' + req.originalUrl || req.url;
    const cachedContent = memCache.get(key);

    if (cachedContent) {
      res.send(cachedContent);
      return;
    }

    const _send = res.send.bind(res);

    res.send = (body) => {
      memCache.set(key, body);
      _send(body);
    };

    next();
  };
}




router.get('/api/homepage', controller.getHomepage);
router.get('/api/filters', controller.getFilters);
router.get('/api/products/:id', controller.getProductById);
// router.get('api/products', memCacheMiddlerware(), controller.getProducts);
router.get('/api/products', controller.getProducts);
router.post('/api/subscriptions', controller.addSubscription);
router.delete('/api/subscriptions', controller.deleteSubscription);
router.get('*', controller.notFound);

console.log(memCache);

module.exports = router;