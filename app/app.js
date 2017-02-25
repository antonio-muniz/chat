'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const homeController = require('./controllers/home-controller');

let app = express();

// Entry middlewares
app.use(express.static('client'));
app.use(bodyParser.json());

// Routes
app.use('/api/v1/status', homeController);

// Exit middlewares


module.exports = app;