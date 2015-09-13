# Meteor Acccounts Soundcloud
#### Soundcloud account login for meteor

##Install

`cd <your-meteor-project>`

`meteor add garbolino:accounts-soundcloud`

and also add following package as pre-req -

`meteor add service-configuration`

##Setup and Usage
1. Register your app with Soundcloud Developer Site at following url- http://soundcloud.com/you/apps/new

2. Fill out the given form but make sure that redirect url as shown as follows-

  OAuth redirect_uri:`<your-server-domain>:<port>/_oauth/soundcloud?close`

  For e.g.redirect url for localhost : `http://localhost:3000/_oauth/soundcloud`

3. After registration, note down the clientid and client secret.
4. Now in your app do create the `accounts.js` (or `accounts.coffee` if you use coffeescript) and put following code inside

 so,it file looks in directory tree- `<your-app-directory>/server/accounts.js`  and put the client id and client secret from previous step

    ```
    ServiceConfiguration.configurations.remove({
      service: "soundcloud"
    });
    ServiceConfiguration.configurations.insert({
      service: "soundcloud",
      clientId: "<your-client-id>",
      secret: "<your-client-secret>"
    });
    ```
5. Now, all things are setup, you are ready to use this package
6. Add following button code for login
```
      Meteor.loginWithSoundcloud(function (err, res) {
          if (err !== undefined)
            console.log('sucess ' + res)
          else
            console.log('login failed ' + err)
      });

##Credits
  Shamelessly based upon @yubozhao Instagram OAuth2 login service (https://github.com/yubozhao/meteor-accounts-instagram)
