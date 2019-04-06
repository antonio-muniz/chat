'use strict';

const server = require('./app/server');

let port = Number.parseInt(process.env.PORT || '8080');

server.listen(port, () => {
  console.info(`Server listening on port ${port}`);
});
