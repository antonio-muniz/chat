'use strict';

const server = require('./app/server');

server.listen(80, () => {
  console.info('Server listening on port 80');
});
