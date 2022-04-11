const cookieController = {};

cookieController.saveAccessToken = (req, res, next) => {
  console.log('res.locals.accessToken', res.locals.accessToken);
  if (res.locals.accessToken) {
    console.log('cookie theoretically added');
    res.cookie('accessToken', res.locals.accessToken);
  }
  return next();
};

//Export controller
module.exports = cookieController;