'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('./config'),
    router = require('./router');

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '500mb' }));
app.use(express.static('src/assets'));
app.use('/', router);

app.listen(config.PORT, () => {
    console.log(`listening on ${config.PORT}`);
});

module.exports = app;