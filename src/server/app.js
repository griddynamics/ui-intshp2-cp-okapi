'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('./config'),
    router = require('./router'),
    path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '500mb' }));
// app.use(express.static('assets'))
// app.use(express.static(__dirname + '/assets'));
// app.use('/assets', express.static(__dirname + '/assets'));
// app.use('/assets', express.static(__dirname + '/assets'));
app.use(express.static(path.join(__dirname, 'assets')))
app.use('/', router);

app.listen(config.PORT, () => {
    console.log(`listening on ${config.PORT}`);
});

module.exports = app;