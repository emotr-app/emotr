//import/require database
const db = require("../db/db.js");

const messageController = {};

// Middleware for posting a new emote/message
// No result
messageController.postMessage = (req, res, next) => {
  const { message, pfp } = req.body; // Object {"message": String, "pfp": String}
  const values = [message, pfp];

  const queryText = "INSERT INTO messages (message, pfp) VALUES ($1, $2)";

  db.query(queryText, values)
    .then(() => next())
    .catch((err) =>
      next({
        log: "postMessage middleware error",
        status: 400,
        message: { err },
      })
    );
};

// Middleware for getting emotes/messages
// Results are in res.locals.feedData
messageController.getMessages = (req, res, next) => {
  const queryText = "SELECT _id, message, pfp FROM messages";

  db.query(queryText)
    .then((data) => {
      res.locals.feedData = data.rows;
      next();
    })
    .catch((err) =>
      next({
        log: "getMessages middleware error",
        status: 400,
        message: { err },
      })
    );
};

// Middleware for deleting emote/message
// No result
// expects body with {_id: [id of message to delete]}
messageController.deleteMessage = (req, res, next) => {
  const deleteId = req.body._id; // Object {"_id": Number}
  values = [deleteId];

  const queryText = "DELETE FROM messages WHERE _id = $1";

  db.query(queryText, values)
    .then((data) => next())
    .catch((err) =>
      next({
        log: "deleteMessage middleware error",
        status: 400,
        message: { err },
      })
    );
};

//Export controller
module.exports = messageController;
