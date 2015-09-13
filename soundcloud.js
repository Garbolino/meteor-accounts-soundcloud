Accounts.oauth.registerService('soundcloud');

if (Meteor.isClient) {
  Meteor.loginWithSoundcloud = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Soundcloud.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.soundcloud'],
    forOtherUsers: [
      'services.soundcloud.username',
      'services.instagram.avatar_url'
    ]
  });
}
