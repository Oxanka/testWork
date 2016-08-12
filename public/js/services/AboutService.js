angular.module('sampleApp').controller('AboutService', []).factory('orderStorage', ['$http', function($http) {
    var STORAGE_ID = 'products-angularjs';

    return {

        getOrders: function() {
            var result;
            result = $http.get('/api/getorders/')
                .then(function (rez) {
                    console.log(rez);
                    return rez.data;

                })
                .catch(function (err) {
                    console.log(err)
                });
            return result;
        }
    };

}]);