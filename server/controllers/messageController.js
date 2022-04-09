//import/require database
const db = require('../db/db.js');

const messageController = {};

// Middleware for posting a new emote/message
// No result
messageController.postMessage = (req, res, next) => {
  console.log(req.body);
  const { message } = req.body; // Object {"message": String}
  const values = [message]; 

  const queryText = 'INSERT INTO messages (message) VALUES ($1)';

  db.query(queryText, values)
    .then(() => next())
    .catch(err => next({
        log: 'postMessage middleware error',
        status: 400,
        message: { err },
    }));
};

// Middleware for getting emotes/messages
// Results are in res.locals.feedData
messageController.getMessages = (req, res, next) => {
  const queryText = 'SELECT _id, message FROM messages';

  db.query(queryText)
    .then(data => {
      res.locals.feedData = data.rows;
      next();
    })
    .catch(err => next({
      log: 'getMessages middleware error',
      status: 400,
      message: { err },
    }));
};

// Middleware for deleting emote/message
// No result
messageController.deleteMessage = (req, res, next) => {
  const deleteId = req.params.id; // Object {"_id": Number}
  values = [deleteId];

  const queryText = 'DELETE FROM messages WHERE _id = $1';

  db.query(queryText, values)
    .then(data => next())
    .catch(err => next({
      log: 'deleteMessage middleware error',
      status: 400,
      message: { err },
    }));
};

//Export controller
module.exports = messageController;