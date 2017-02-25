'use strict';

module.exports = () => {
  return {
    database: {
      host: process.env.CHAT_DB_HOST || 'localhost',
      port: process.env.CHAT_DB_PORT || 5432,
      database: process.env.CHAT_DB_DATABASE || 'agora_dev',
      user: process.env.CHAT_DB_USER || 'agora',
      password: process.env.CHAT_DB_PASSWORD || '123456'
    },
    log: {
    },
    port: process.env.PORT || 3000
  };
};