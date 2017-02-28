'use strict';

const errors = require('../errors');

module.exports = () => {

  return (err, req, res, next) => {

    let errorCode = (err.code && errors[err.code]) ? err.code : 'UNEXPECTED_ERROR';
    let errorMessage = errors[errorCode].message;
    let statusCode = errors[errorCode].statusCode;

    let logger = res.locals.context.get('logger');
    logger.warn(`[API ERROR] ${errorCode}: ${errorMessage}`);
    if (err.stack) {
      logger.error(err.stack);
    }

    res.status(statusCode).json({ errorCode, errorMessage });

    next();

  }

}
