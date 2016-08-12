angular.module('sampleApp').controller('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/product', {
            templateUrl: 'views/product.html',
            controller: 'ProductController'
        })

        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })


    $locationProvider.html5Mode(true);

}]);
