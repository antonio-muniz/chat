'use strict';
/* global describe,it */

const express = require('express');
const request = require('supertest');

const contextMiddleware = require('../../../app/middlewares/context-middleware');
const errorMiddleware = require('../../../app/middlewares/error-middleware');
const errors = require('../../../app/errors');

describe('error-middleware', function () {

  it('should respond predefined errors', function (done) {
    let app = express();

    app.use(contextMiddleware());

    app.get('/', (req, res, next) => {
      next({ code: 'USER_ALREADY_EXISTS' });
    });

    app.use(errorMiddleware());

    request(app)
      .get('/')
      .expect(errors['USER_ALREADY_EXISTS'].statusCode, {
        errorCode: 'USER_ALREADY_EXISTS',
        errorMessage: errors['USER_ALREADY_EXISTS'].message,
      })
      .end(done);
  });

  it('should respond unexpected errors', function (done) {
    let app = express();

    app.use(contextMiddleware());

    app.get('/', (req, res, next) => {
      next(new Error('OH NO!'));
    });

    app.use(errorMiddleware());

    request(app)
      .get('/')
      .expect(errors['UNEXPECTED_ERROR'].statusCode, {
        errorCode: 'UNEXPECTED_ERROR',
        errorMessage: errors['UNEXPECTED_ERROR'].message,
      })
      .end(done);
  });

});
