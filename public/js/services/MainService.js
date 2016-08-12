angular.module('sampleApp').controller('MainService', []).factory('mainStorage', ['$http', function ($http) {
    var STORAGE_ID = 'products-angularjs';

    return {

        create_product: function () {

            return $http.post('/api/insertproduct/', {
            })
                .then(function (ll) {
                    return ll;
                })
                .catch(function (err) {
                    console.log(err)
                });
        }
    };
}]);

