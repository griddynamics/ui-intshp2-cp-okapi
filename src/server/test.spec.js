process.env.NODE_ENV = 'test';

const request = require('supertest'),
    app = require('./app'),
    accountsMocks = require('./dummy-data/accounts.json'),
    rolesMocks = require('./dummy-data/roles.json'),
    blogsMocks = require('./dummy-data/blogs.json');

describe('#API TESTS', () => {
  describe('Accounts', () => {
    it('should answer on GET', done => {
      request(app)
        .get('/api/accounts')
        .expect(200, accountsMocks, done)
    })
  });
  describe('Roles', () => {
    it('should answer on GET', done => {
      request(app)
        .get('/api/roles')
        .expect(200, rolesMocks, done)
    })
  });

  describe('Blogs', () => {
    it('should answer on GET', done => {
      request(app)
        .get('/api/blogs')
        .expect(200, blogsMocks, done)
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
