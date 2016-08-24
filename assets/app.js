'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'stateProvider'
])
.config(function($routeProvider){
  $routeProvider
  .when('/home',{
    templateUrl : 'components/home/home.html',
    controller : 'components/home/home.controller.js'
  })
});
