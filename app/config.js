'use strict';

const config = {
  httpPort: Number.parseInt(process.env.PORT || 8080) 
};

module.exports = {
  getHttpPort: () => { return config.httpPort; }
};
