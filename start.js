'use strict';

const server = require('./app/server');

server.listen(8080, () => {
  console.info('Server listening on port 8080');
});
