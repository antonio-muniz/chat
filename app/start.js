'use strict';

const config = require('./config');
const server = require('./server');

let port = config.getHttpPort();

server.listen(port, () => {
  console.info(`Server listening on port ${port}`);
});
