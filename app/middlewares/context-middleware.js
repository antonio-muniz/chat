'use strict';

let createContext = require('../../utils/context/context');
let createLogger = require('../../utils/logging/logger');

module.exports = () => {

  return (req, res, next) => {
    let requestId = req.get('X-Request-ID') || '';
    let context = createContext(requestId);

    context.set('logger', createLogger(context.id));

    res.locals.context = context;

    next();
  };

};

