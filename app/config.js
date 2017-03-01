'use strict';

module.exports = () => {
  return {
    database: process.env.DATABASE_URL || 'postgres://postgres:@localhost:5432/chat',
    environment: process.env.NODE_ENV || 'development',
    logging: {
      mode: process.env.LOG_MODE || 'file',
      directory: process.env.LOG_DIRECTORY || './logs'
    },
    port: process.env.PORT || 3000
  };
};
