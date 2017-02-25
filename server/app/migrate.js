'use strict';

const exec = require('child_process').exec;

const { host, port, database, user, password } = require('./config')().database;


let databaseUrl = `postgresql://${user}:${password}@${host}:${port}/${database}`;

process.env.DATABASE_URL = databaseUrl;

let parameters = process.argv.slice(2);
let command = String.prototype.concat.apply('pg-migrate', parameters.map(p => ` ${p}`));

exec(command, (error, stdout, stderr) => {
  if (stdout) {
    console.log(stdout);
  }
  if (error) {
    if (stderr) {
      console.log(stderr);
    }
    process.exit(error.code);
  }
  process.exit(0);
});