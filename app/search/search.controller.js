(function () {
  'use strict';
  angular.module('main')
    .controller('SearchController', SearchController);

  function SearchController($log, BusApiService, BusService, lodash) {

    var vm = this;
    var search = {};
    var prevision = {};

    BusApiService
      .getLines()
      .$promise
      .then(function (success) {
        $log.debug('success', success);
        vm.lines = success;
      })
      .catch(function (err) {
        $log.error(err);
      });

    vm.search = function () {
      BusApiService
        .search({
          line: vm.search.line._id,
          station: vm.search.station.id,
          direction: vm.search.direction
        })
        .$promise
        .then(function (prevision) {
          $log.debug(prevision);
          vm.prevision = prevision;
        })
        .catch(function (err) {
          $log.error(err);
        });
    };

    vm.getLines = function (query) {
      if (query) {
        var results = lodash.filter(vm.lines, function (line) {
          return line.name.toLowerCase()
            .indexOf(query.toLowerCase()) > -1;
        });
        return {
          items: results
        };
      } else {
        return {
          items: vm.lines
        };
      }
    };

    // this.getKfToplota = function (query) {
    //   if (query) {
    //     var results = lodash.filter(vm.kfToplota, function (toplota) {
    //       return toplota.doc.NAZIV.toLowerCase()
    //         .indexOf(query.toLowerCase()) > -1;
    //     });
    //     return {
    //       items: results
    //     };
    //   } else {
    //     return {
    //       items: vm.kfToplota
    //     };
    //   }
    // };
  }
})();
