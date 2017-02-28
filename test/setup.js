'use strict';
/* global before */

const fs = require('fs');

const config = require('../app/config')();
const logger = require('../utils/logging/logger');
const postgres = require('../utils/postgres/postgres-client');

before(function () {

  try {
    fs.accessSync('./logs/');
  }
  catch (err) {
    fs.mkdirSync('./logs/');
  }

  logger.init(config.logging);

  postgres.init(config.database);

});
