'use strict';

const app = require('./app/app');
const config = require('./app/config')();
const postgres = require('./utils/postgres/postgres-client');

postgres.init(config.database);

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});
