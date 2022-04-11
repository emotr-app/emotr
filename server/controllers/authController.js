const axios = require('axios');

const authController = {};

authController.getAccessToken = (req, res, next) => {
  const code = req.query.code;

  let config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  axios.post(`https://github.com/login/oauth/access_token?client_id=216cfc318f86097699f5&client_secret=ed1c360282f53c62bfe568e47ffebb393774c5de&code=${code}`, {}, config)
    .then(data => {
      // console.log('data fetched in authController.getAccessToken:', data);
      res.locals.accessToken = data.data.access_token;
      return next();
    });
};

authController.verifyLoggedIn = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  console.log('accessToken:', accessToken);

  let config = {
    headers: {
      'Authorization': `token ${accessToken}`
    }
  };

  axios.get('https://api.github.com/user', config)
    .then(data => {
      console.log('data returned from verifyLoggedIn: ', data);
      console.log('data.data.login:', data.data.login);
      if (data.data.login) res.locals.loggedIn = true;
      else res.locals.loggedIn = false;
      return next();
    });
};


//Export controller
module.exports = authController;