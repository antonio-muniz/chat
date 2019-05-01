'use strict';

let user;

function setup({ id, name, imageUrl }) {
  user = { id, name, imageUrl };
}

function getId() { return user.id; }
function getName() { return user.name; }
function getImageUrl() { return user.imageUrl; }

module.exports = {
  setup,
  getId,
  getName,
  getImageUrl
};
