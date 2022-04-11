const path = require('path');
const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));;
const authController = require('../controllers/authController.js');
const cookieController = require('../controllers/cookieController.js');


const authRouter = express.Router();

authRouter.get('/', authController.getAccessToken, cookieController.saveAccessToken, (req, res) => {
  res.redirect('/auth/loggedIn');
});

authRouter.get('/loggedIn', authController.verifyLoggedIn, (req, res) => {
  if (res.locals.loggedIn) {
    res.send('All logged in!');
  }
  else res.send('Not logged in.');
})


module.exports = authRouter;