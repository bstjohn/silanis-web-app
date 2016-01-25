
/* Controllers */

var silanisControllers = angular.module('silanisControllers', []);

silanisControllers.controller('testCtrl', ['$scope', '$sce',
    function($scope, $sce) {
        $scope.catSharkUrl  = $sce.trustAsResourceUrl('http://i.imgur.com/GXbLRfn.webm');
        $scope.sessionToken = '';
        $scope.packageId    = '';
        $scope.documentId   = '';
        $scope.userInput    = false;

        $scope.updateIFrame = function () {
            var silanisSessionAPI = 'https://sandbox.e-signlive.com/access?sessionToken=';
            var silanisPackageApi = 'https://sandbox.e-signlive.com/packages/';
            var silanisDocument   = '/documents/';
            $scope.userInput = true;

            var element = angular.element('#silanisIFrame');
            if (!angular.equals($scope.sessionToken, '')) {
                element.attr('src', $sce.trustAsResourceUrl(silanisSessionAPI + $scope.sessionToken));
                $scope.sessionToken = '';
                return;
            }
            
            var apiUrl = silanisPackageApi + $scope.packageId;
            if(!angular.equals($scope.documentId, '')) {
                apiUrl += silanisDocument + $scope.documentId;
            }

            element.attr('src', $sce.trustAsResourceUrl(apiUrl));

            $scope.packageId    = '';
            $scope.documentId   = '';
        };
    }]);