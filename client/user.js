'use strict';

let user = {};

function getId() { return user.id; }
function setId(id) { user.id = id; }

function getName() { return user.name; }
function setName(name) { user.name = name; }

function getImageUrl() { return user.imageUrl; }
function setImageUrl(imageUrl) { user.imageUrl = imageUrl; }

module.exports = {
  getId,
  setId,
  getName,
  setName,
  getImageUrl,
  setImageUrl
};
