/* App Module */

var silanisWebApp = angular.module('silanisWebApp', [
  'ngRoute',
  'silanisControllers'
]);

silanisWebApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/test', {
        templateUrl: 'partials/test.html',
        controller: 'testCtrl'
      }).
      when('/pinPage', {
        templateUrl: 'partials/pinPage.html',
        controller: 'pinPageCtrl'
      }).
      otherwise({
        redirectTo: '/test'
      });
  }]);