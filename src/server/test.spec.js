process.env.NODE_ENV = 'test';

const request = require('supertest'),
    app = require('./app'),
    productsMocks = require('../assets/products.json');

describe('#API TESTS', () => {
  describe('Accounts', () => {
    it('should answer on GET', done => {
      request(app)
        .get('/api/products')
        .expect(200, productsMocks, done)
    })
  });
  describe('404', () => {
    it('should return status 404 if resource not found', done => {
      request(app)
        .get('/blabla')
        .expect(404, {}, done);
    })
  })
})
