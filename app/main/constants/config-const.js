'use strict';
angular.module('main')
  .constant('SERVER_BASE', 'http://localhost:3000')
  .constant('Config', {
    // gulp environment: injects environment vars
    ENV: {
      /*inject-env*/
      'SERVER_URL': 'https://DEVSERVER/api'
      /*endinject*/
    },

    // gulp build-vars: injects build vars
    BUILD: {
      /*inject-build*/
      /*endinject*/
    }

  });
