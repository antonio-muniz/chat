'use strict';

const bodyParser = require('body-parser');
const express = require('express');

// Controllers
const statusController = require('./controllers/status-controller');

// Middlewares
const contextMiddleware = require('./middlewares/context-middleware');
const errorMiddleware = require('./middlewares/error-middleware');

let app = express();

// Entry middlewares
app.use(express.static('client'));
app.use(contextMiddleware());
app.use(bodyParser.json());

// Routes
app.use('/api/v1/status', statusController);

// Exit middlewares
app.use(errorMiddleware());

module.exports = app;
