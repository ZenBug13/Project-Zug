'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
])
.config(function($stateProvider){
  $stateProvider
    .state(bny)
    .state('/bny', {
      templateUrl: 'components/bny/bny.html',
      controller: 'components/bny/bny.controller.js'
    })
});
