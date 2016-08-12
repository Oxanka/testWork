angular.module('ProductCtrl', []).controller('ProductController', function ($scope, $location, productStorage) {
    $scope.totalPrice = 0;
    $scope.resProducts = "";
    $scope.addr = [];
    $scope.checkedProducts = [];
    $scope.checkedProductsID = [];
    $scope.allOrder = [];


    productStorage.get().then(function (productArray) {
        $scope.products = productArray;
    });

    if ($location.path() === '') {
        $location.path('/');
    }


    $scope.toggleCheck = function (prod) {
        if ($scope.checkedProducts.indexOf(prod) === -1) {
            $scope.checkedProducts.push(prod);
            $scope.checkedProductsID.push(prod._id);
            $scope.totalPrice += prod.price;
        } else {
            $scope.checkedProducts.splice($scope.checkedProducts.indexOf(prod), 1);
            $scope.checkedProductsID.splice($scope.checkedProductsID.indexOf(prod._id), 1);
            $scope.totalPrice -= prod.price;
        }
    };

    $scope.totalSum = function () {
        console.log($scope.resProducts);
    };


    $scope.addOrder = function () {
        $scope.addr.price = $scope.totalPrice;
        $scope.allOrder.id_products = $scope.checkedProductsID;
        $scope.allOrder.address = $scope.addr;

        productStorage.create($scope.allOrder);
        $location.path('/about')
    };

});
