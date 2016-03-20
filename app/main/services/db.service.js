(function () {
  'use strict';
  angular
    .module('main')
    .factory('DBService', DBService);

  /* @ngInject */
  function DBService($log, $q, pouchDB, BusApiService) {

    var db = pouchDB('busstop', {});

    var synchronize = function () {
      var codes = [];
      getCodes()
        .then(function (docs) {
          docs.forEach(function (doc) {

          });
        })
        .catch(function (err) {
          $log.error(err);
        });
      BusApiService
        .getLines([])
        .$promise
        .then(function (lines) {
          lines.forEach(function (line) {
            db.put(line);
          });
        });
    };

    var createDesignDoc = function () {
      db.put({
        _id: '_design/design',
        views: {
          idCode: function (doc) {
            emit([doc._id, doc.code]);
          }.toString()
        }
      });
    };

    function getCodes() {
      var deferred = $q.defer();
      db
        .query('idCode')
        .then(function (lineCodes) {
          var lineCodeMap = {};
          lineCodes.forEach(function (lineCode) {
            lineCodeMap[lineCode._id] = lineCode.code;
          });
          deferred.resolve(lineCodeMap);
        });
      return deferred.promise;
    }

    return {
      synchronize: synchronize,
      createDesignDoc: createDesignDoc,
      getCodes: getCodes
    };
  }
})();
