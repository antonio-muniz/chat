'use strict';

const exec = require('child_process').exec;

const database = require('./config')().database;

process.env.DATABASE_URL = database;

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
