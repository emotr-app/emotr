const request = require('supertest');
const fs = require('fs');
const path = require('path');

// const testJsonFile = path.resolve(__dirname, '../server/db/markets.test.json');

const server = 'http://localhost:3000';


describe('Route integration', () => {
  describe('/feed', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/feed')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });
});