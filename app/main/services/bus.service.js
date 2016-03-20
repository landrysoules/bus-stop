(function () {
  'use strict';
  angular
    .module('main')
    .factory('BusService', BusService);

  /* @ngInject */
  function BusService($log, SERVER_BASE) {

    var generateURL = function (stationData) {
      var url = SERVER_BASE + '/line/' + stationData.line + '/station/' + stationData.station + '/direction/' + stationData.direction;
      return url;
    }

    return {
      generateURL: generateURL
    };
  }
})();
