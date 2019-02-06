'use strict';

let express = require('express');
let controller = require('./controller');
let router = express.Router();

router.get('/api/accounts', controller.getAccounts);
// router.get('/api/test', controller.getById);
router.get('/api/roles', controller.getRoles);
router.get('/api/blogs', controller.getBlogs);
router.get('*', controller.notFound);

module.exports = router;