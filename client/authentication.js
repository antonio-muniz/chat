'use strict';

const user = require('./user');
const view = require('./view');

function registerUserAuthenticationListener() {
  window.onGoogleSignIn = (googleUser) => {
    view.hideGoogleLoginButton();
  
    let profile = googleUser.getBasicProfile();
    user.setup({
      id: profile.getId(),
      name: profile.getName(),
      imageUrl: profile.getImageUrl()
    });
  
    view.displayUserInfo();
    view.enableMessageInput();
  };
}

module.exports = { registerUserAuthenticationListener };
