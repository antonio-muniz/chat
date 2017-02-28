'use strict';

module.exports = (id) => {
  let vars = {};
  return {
    id: id,
    set: (key, value) => {
      vars[key] = value;
    },
    get: (key) => vars[key]
  };
};
