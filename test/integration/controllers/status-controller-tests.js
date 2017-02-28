'use strict';
/* global describe, it */

require('should');

const request = require('supertest');

const appInfo = require('../../../package.json');
const app = require('../../../app/app');

describe('status-controller', function () {

  describe('get /', function () {

    it('should return the API status', function (done) {
      request(app)
        .get('/api/v1/status')
        .expect(200)
        .expect((res) => {
          res.body.should.have.property('version', appInfo.version);
          res.body.should.have.property('status', 'OK');
          res.body.should.have.property('mood').which.is.a.String();
          res.body.should.have.property('serverTime').which.is.a.String();
          new Date(res.body.serverTime).should.be.belowOrEqual(new Date());
        })
        .end(done);
    });

  });

});
