'use strict';
angular
  .module('main')
  .factory('apiService', function ($resource, API_ENDPOINT) {

    return $resource(API_ENDPOINT + '/lines', {}, {
      getLines: {
        method: 'POST',
        params: [],
        isArray: true
          // headers: {
          //   'Content-Type': 'application/x-www-form-urlencoded'
          // }
      }
    });
  });
