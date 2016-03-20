(function () {
  'use strict';
  angular
    .module('main')
    .factory('BusApiService', BusApiService);

  function BusApiService($resource, API_ENDPOINT) {

    return $resource(API_ENDPOINT + '/lines', {}, {
      getLines: {
        method: 'POST',
        params: {},
        isArray: true
          // headers: {
          //   'Content-Type': 'application/x-www-form-urlencoded'
          // }
      },
      search: {
        method: 'GET',
        url: API_ENDPOINT + '/line/:line/station/:station/direction/:direction'
      }
    });
  }
})();
