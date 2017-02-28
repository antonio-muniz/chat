'use strict';

const cool = require('cool-ascii-faces');
const express = require('express');

const appInfo = require('../../package.json');
const postgres = require('../../utils/postgres/postgres-client');

let router = express.Router();

router.get('/', (req, res, next) => {

  postgres.prompt()
    .then((succeeded) => {
      let status = (succeeded) ? 'OK' : 'SERVICE_UNAVAILABLE';
      res.json({
        version: appInfo.version,
        status,
        serverTime: new Date(),
        mood: cool()
      });
      next();
    })
    .catch(next);

});

module.exports = router;
