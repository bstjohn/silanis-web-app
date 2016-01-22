
/* Controllers */

var silanisControllers = angular.module('silanisControllers', []);

silanisControllers.controller('testCtrl', ['$scope', '$sce',
  function($scope, $sce) {
      var silanisAPI      = 'https://sandbox.e-signlive.com/access?sessionToken=';
      $scope.catSharkUrl  = $sce.trustAsResourceUrl('http://i.imgur.com/GXbLRfn.webm');
      $scope.sessionToken = '';
      $scope.userInput    = false;

      $scope.updateIFrame = function () {
          $scope.userInput = true;

          var element = angular.element('#silanisIFrame');
          element.attr('src', $sce.trustAsResourceUrl(silanisAPI + $scope.sessionToken));
      };
  }]);