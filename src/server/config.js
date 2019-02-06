'use strict';

const config = {};

// process.env.NODE_PORT = process.env.NODE_PORT || 4200;
process.env.NODE_PORT = process.env.NODE_PORT || 3000;
process.env.NODE_TEST_PORT = process.env.NODE_TEST_PORT || 3001; 
// process.env.NODE_TEST_PORT = process.env.NODE_TEST_PORT || 3001; 

config.PORT = process.env.NODE_ENV === 'test' ? process.env.NODE_TEST_PORT : process.env.NODE_PORT;

module.exports = config;