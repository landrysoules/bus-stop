(function (){
  'use strict';
  angular
  .module('main')
  .run(runBlock);

  //@ngInject
  function runBlock(DBService){
    DBService.synchronize();
  }

})()
