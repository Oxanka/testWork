angular.module('MainCtrl', []).controller('MainController', function($scope, $location, mainStorage) {

    $scope.makeProd = function () {
        mainStorage.create_product();
    }

    $scope.makeProd();
});