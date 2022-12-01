const express = require('express');
/* modulos */
const servicesRouter = require('./servicesRouter');
const usersRouter = require('./usersRouter');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/services', servicesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;