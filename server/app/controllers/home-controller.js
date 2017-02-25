'use strict';

const express = require('express');
const serverInfo = require('../../package.json');

let router = express.Router();

router.get('/', (req, res, next) => {

  res.json({
    status: 'OK',
    version: serverInfo.version
  });

  next();

});

module.exports = router;