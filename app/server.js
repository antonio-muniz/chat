'use strict';

const express = require('express');
const http = require('http');
const socketHub = require('./transport/socket/chat_client/socket_hub');

let app = express();
app.use(express.static('dist'));

let server = http.createServer(app);
socketHub.initialize(server);

module.exports = server;
