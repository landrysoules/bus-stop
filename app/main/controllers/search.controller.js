'use strict';
angular.module('main')
  .controller('SearchController', function ($log, apiService) {
    var vm = this;
    apiService
      .getLines()
      .$promise
      .then(function (success) {
        $log.debug('success', success);
        vm.lines = success;
      })
      .catch(function (err) {
        $log.error(err);
      });
  });
