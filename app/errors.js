'use strict';

module.exports = {
  USER_ALREADY_EXISTS: {
    message: 'The specified user name already belongs to an active user',
    statusCode: 400
  },
  UNEXPECTED_ERROR: {
    message: 'An unexpected error has occurred while fulfilling the request',
    statusCode: 500
  }
};
