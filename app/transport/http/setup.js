'use strict';

const express = require('express');
const http = require('http');

module.exports = () => {
  let app = express();
  app.use(express.static('dist'));

  return http.createServer(app);
};
