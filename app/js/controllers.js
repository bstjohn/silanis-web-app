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
                console.log(apiUrl);
                $scope.sessionToken = '';
                return;
            }
            
            var apiUrl = silanisPackageApi + $scope.packageId;
            if(!angular.equals($scope.documentId, '')) {
                apiUrl += silanisDocument + $scope.documentId;
            }

            element.attr('src', $sce.trustAsResourceUrl(apiUrl));
            console.log(apiUrl);

            $scope.packageId    = '';
            $scope.documentId   = '';
        };
    }])
    .controller('pinPageCtrl', ['$scope', '$timeout', '$animate',
        function ($scope, $timeout, $animate) {
            var hideWarnings = function () {
                $scope.inputInvalid = false;
                $scope.invalidPin = false;
            };

            $scope.formSubmitted = false;
            hideWarnings();

            $scope.verifyPin = function () {
                if (angular.isUndefined($scope.pin) || $scope.pin.toString().length < 5) {
                    $scope.errorMessage = 'PIN must be 5 digits.';
                    $scope.inputInvalid = true;
                    return;
                }

                hideWarnings();
                $scope.formSubmitted = true;
                $timeout(function () {
                    $scope.errorMessage = 'Invalid PIN. Please try again.';
                    $scope.formSubmitted = false;
                    $scope.invalidPin = true;
                }, 5000);
            };

            $scope.$watch('pin', function (newValue, oldValue) {
                hideWarnings();
                if (newValue > 99999 || angular.equals(newValue, 0)) {
                    $scope.pin = oldValue;
                }
            });
        }
    ]);