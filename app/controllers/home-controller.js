'use strict';

const express = require('express');
const postgres = require('../../utils/postgres/postgres-client');
const serverInfo = require('../../package.json');

let router = express.Router();

router.get('/', (req, res, next) => {

  postgres.prompt()
    .then((succeeded) => {
      let status = (succeeded) ? 'OK' : 'SERVICE_UNAVAILABLE';
      res.json({
        version: serverInfo.version,
        status
      });
      next();
    });

});

module.exports = router;
