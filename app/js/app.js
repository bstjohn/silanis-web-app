'use strict';

/* App Module */

var silanisWebApp = angular.module('silanisWebApp', [
  'ngRoute',
  'silanisAnimations',
  'silanisControllers'
]);

silanisWebApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/test', {
        templateUrl: 'partials/test.html',
        controller: 'testCtrl'
      }).
      otherwise({
        redirectTo: '/test'
      });
  }]);