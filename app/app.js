'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const errorizer = require('errorizer');

const errors = require('./errors');

// Controllers
const statusController = require('./controllers/status-controller');

// Middlewares
const contextMiddleware = require('./middlewares/context-middleware');

let app = express();

// Entry middlewares
app.use(express.static('client'));
app.use(contextMiddleware());
app.use(bodyParser.json());

// Routes
app.use('/api/v1/status', statusController);
app.get('/users', (req, res, next) => {
  next('USER_ALREADY_EXISTS');
});

// Exit middlewares
app.use(errorizer(errors));

module.exports = app;
