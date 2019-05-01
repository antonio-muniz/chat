'use strict';

function registerAuthenticationListener() {
  window.onGoogleSignIn = (googleUser) => { // eslint-disable-line no-unused-vars
    view.hideGoogleLoginButton();
  
    let profile = googleUser.getBasicProfile();
    user.setId(profile.getId());
    user.setName(profile.getName());
    user.setImageUrl(profile.getImageUrl());
  
    view.displayUserInfo();
    view.enableMessageInput();
  };
}

module.exports = { registerAuthenticationListener };
