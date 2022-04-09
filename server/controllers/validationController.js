//import/require database
const db = require('../db/db.js');

const validationController = {};

// Checks to make sure the submitted message is only emojis. For now, just excludes normal characters.
validationController.validateMessage = (req, res, next) => {
  const msg = req.body.message;
  // const emojiRegex = //
};


//Export controller
module.exports = validationController;