angular.module('AboutCtrl', []).controller('AboutController', function ($scope, $location, orderStorage) {
    $scope.order = [];

    if ($location.path() === '') {
        $location.path('/');
    }
    orderStorage.getOrders()
        .then(function (orderArray) {
            $scope.order = orderArray;
            console.log("$scope.order");
            console.log($scope.order);
        });

});