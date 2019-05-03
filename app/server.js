'use strict';

const setupHttpServer = require('./transport/http/setup');
const setupSockets = require('./transport/socket/setup');

let httpServer = setupHttpServer();
setupSockets(httpServer);

module.exports = httpServer;
