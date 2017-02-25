'use strict';

const app = require('./app/app');
const config = require('./app/config')();

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});