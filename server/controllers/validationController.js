//import/require database
const emojiRegex = require('emoji-regex');
const db = require('../db/db.js');

const validationController = {};

const messageIsOnlyEmojis = (msg) => {
  //const regex = /^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])+$/gi;
  const regex = emojiRegex();
  return regex.test(msg);
};

// Checks to make sure the submitted message is only emojis. For now, accepts anything with unicode character > 8505
validationController.validateMessage = (req, res, next) => {
  const msg = req.body.message;

  // message is not only emojis
  if (!messageIsOnlyEmojis(msg)) return next('err');

  // message passes validation.
  return next();
};

//Export controller
module.exports = validationController;