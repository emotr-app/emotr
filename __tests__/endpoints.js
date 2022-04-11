const request = require('supertest');
const fs = require('fs');
const path = require('path');
const db = require('../server/db/db.js');
import 'regenerator-runtime/runtime'; // Stack Overflow told me to do this. I was getting weird errors with async functions.

// const testJsonFile = path.resolve(__dirname, '../server/db/markets.test.json');

const server = 'http://localhost:3000';

/* 
  NOTE: This testing suite would be much better with a mock database. I chose not to make one, because
  I would need to refactor code that others are working on in order to allow dependency injection.
*/
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


      it('gives a 404 when trying to access a nonexistent page', () => {
        return request(server)
          .get('/feed/alsdkfjlsakdfj')
          .expect(404);
      });
    });

    describe('POST', () => {
      it('responds with 200 status and text/html content type', async () => {
        const response = await request(server)
          .post('/feed')
          .send({
            "message": "😀"
          });


        // cleanup
        const queryStringDelete = `DELETE FROM messages WHERE message = '😀'`;
<<<<<<< HEAD
        await db.query(queryStringDelete);
=======
        db.query(queryStringDelete);
        
        expect(response.statusCode).toBe(200);      
>>>>>>> dev
      });

      it('handles messages which are too long gracefully', () => {
        return request(server)
          .post('/feed')
          .send({
            "message": "😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀"
          })
          .expect(400);
      });

      it('doesn\'t allow messages which include normal letters', async () => {
        const msg = "forbidden msg";
        const result = await request(server)
          .post('/feed')
          .send({
            "message": msg
          });
        
<<<<<<< HEAD
        expect(result.statusCode).toBe(400);
        await db.query(`DELETE FROM messages WHERE message = '${msg}'`);
=======
        db.query(`DELETE FROM messages WHERE message = ${msg}`);
        
        expect(result.statusCode).toBe(400);
>>>>>>> dev
      });

      it('gives a 400 error when request body invalid', () => {
        return request(server)
          .post('/feed')
          .send({
            "bad key": "bad val"
          })
          .expect(400);
      });

    });

    describe('DELETE', () => {

      let idToDelete;
      let msg = '😀😀😀';
      beforeEach(async () => {
        // post the message to delete, and get its id
        const queryStringInsert = `INSERT INTO messages (message) VALUES ('${msg}') RETURNING _id`;
        const data = await db.query(queryStringInsert);
        idToDelete = data.rows[0]._id;
      });

      afterEach(async () => {
        // cleanup:
        const queryStringDelete = `DELETE FROM messages WHERE message = '${msg}'`;
        await db.query(queryStringDelete);
      });

      it('deletes a message', async () => {
        // delete message via server
        const result =
          await request(server)
          .del(`/feed`)
          .send({"_id": idToDelete});

        console.log('deleted');
        expect(result.statusCode).toBe(200);
      });
    });
  });

  it('gives a 404 when trying to access a nonexistent page', () => {
    return request(server)
      .get('/asdlkfjaslkfj')
      .expect(404);
  });
});
