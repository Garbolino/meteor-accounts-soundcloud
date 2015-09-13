Package.describe({
  "summary": "Login service for SoundCloud accounts",
  "name": "garbolino:accounts-soundcloud",
  "version": "0.0.1",
  "git": "https://github.com/Garbolino/meteor-accounts-soundcloud"
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.imply('accounts-oauth', ['client', 'server']);

  api.use('oauth', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('http', ['server']);
  api.use('templating', 'client');
  api.use('underscore', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.add_files('soundcloud_server.js', 'server');
  api.add_files('soundcloud_client.js', 'client');
  api.add_files('soundcloud.js');

  api.export('Soundcloud');

  api.add_files(
    ['soundcloud_login_button.css', 'soundcloud_configure.html', 'soundcloud_configure.js'],
    'client');
});
