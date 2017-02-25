'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const homeController = require('./controllers/home-controller');

let app = express();

// Entry middlewares
app.use(bodyParser.json());

// Routes
app.get('/', homeController);

// Exit middlewares



module.exports = app;