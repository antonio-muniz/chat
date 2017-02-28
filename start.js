'use strict';

const app = require('./app/app');
const config = require('./app/config')();
const logger = require('./utils/logging/logger');
const postgres = require('./utils/postgres/postgres-client');

logger.init(config.logging);
postgres.init(config.database);

app.listen(config.port, () => {
  logger('chat-app').info(`Server listening on port ${config.port}`);
});
