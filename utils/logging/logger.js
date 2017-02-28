'use strict';

const path = require('path');
const winston = require('winston');

let logger;

module.exports = (id) => {
  return {
    error: (message, details) => {
      logger.log('error', message, { id, details });
    },
    info: (message, details) => {
      logger.log('info', message, { id, details });
    },
    warn: (message, details) => {
      logger.log('warn', message, { id, details });
    }
  };
};

module.exports.init = (options) => {
  logger = (options.mode == 'console')
    ? createConsoleLogger()
    : createFileLogger(options.directory);
};

function createConsoleLogger() {
  return new winston.Logger({
    transports: [
      new winston.transports.Console()
    ]
  });
}

function createFileLogger(directory) {
  return new winston.Logger({
    transports: [
      new winston.transports.File({
        name: 'error-file',
        level: 'error',
        filename: path.join(directory || './logs', 'error.log')
      }),
      new winston.transports.File({
        name: 'info-file',
        level: 'info',
        filename: path.join(directory || './logs', 'info.log')
      }),
      new winston.transports.File({
        name: 'warn-file',
        level: 'warn',
        filename: path.join(directory || './logs', 'warn.log')
      })
    ]
  });
}
