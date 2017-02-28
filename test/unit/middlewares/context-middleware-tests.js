'use strict';
/* global describe,it */

const express = require('express');
const request = require('supertest');
const should = require('should');
const uuid = require('uuid').v4;

const contextMiddleware = require('../../../app/middlewares/context-middleware');

describe('context-middleware', function () {

  it('should create a context for the request', function (done) {
    let app = express();

    app.use(contextMiddleware());

    let context;
    app.get('/', (req, res, next) => {
      context = res.locals.context;
      res.status(200).end();
      next();
    });

    request(app)
      .get('/')
      .expect(200)
      .expect((res) => {
        should.exist(context);
        context.should.have.property('id', '');
        let logger = context.get('logger');
        should.exist(logger);
      })
      .end(done);
  });

  it('should capture X-Request-ID header into the context', function (done) {
    let app = express();

    app.use(contextMiddleware());

    let context;
    app.get('/', (req, res, next) => {
      context = res.locals.context;
      res.status(200).end();
      next();
    });

    let requestId = uuid();

    request(app)
      .get('/')
      .set('X-Request-ID', requestId)
      .expect(200)
      .expect((res) => {
        should.exist(context);
        context.should.have.property('id', requestId);
        let logger = context.get('logger');
        should.exist(logger);
      })
      .end(done);
  });

});
