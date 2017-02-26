'use strict';

const postgres = require('pg-promise')();

let db;

function executeCommand(command, parameters) {
  return db.none(command, parameters);
}

function executeQuery(query, parameters) {
  return db.query(query, parameters);
}

function init(connectionString) {
  db = postgres(connectionString);
}

function prompt() {
  return db.one('SELECT 1 as check')
    .then((row) => {
      return row.check === 1;
    })
    .catch((err) => {
      return false;
    });
}

module.exports = {
  executeCommand,
  executeQuery,
  init,
  prompt
};
