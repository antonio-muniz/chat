'use strict';

module.exports = () => {
  return {
    database: process.env.DATABASE_URL || 'postgres://chat:123456@localhost:5432/chat',
    port: process.env.PORT || 3000
  };
};
