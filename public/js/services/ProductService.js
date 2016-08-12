angular.module('sampleApp').controller('ProductService', []).factory('productStorage', ['$http', function ($http) {
    var STORAGE_ID = 'products-angularjs';

    return {
        get: function () {
            var result;
            result = $http.get('/api/items/')
                .then(function (ll) {
                    return ll.data;
                })
                .catch(function (err) {
                    console.log(err)
                });
            return result;
        },

        create: function (productData) {

            console.log("-ProjectService.js: Try to add new product - " + productData);

            return $http.post('/api/address/', {
                shop_city: productData.address.cityShop,
                shop_street: productData.address.streetShop,
                shop_house_number: productData.address.numberHouseShop,
                client_city: productData.address.cityClient,
                client_street: productData.address.streetClient,
                client_house_number: productData.address.numberHouseClient,
                price: productData.address.price
            })
                .then(function (ll) {
                    return $http.post('/api/saveitems/', {
                        address_id: ll.data._id,
                        item_id: productData.id_products
                    })
                        .then(function (status) {
                            return status;
                        })
                        .catch(function (err) {
                            console.log(err)
                        });
                })
                .catch(function (err) {
                    console.log(err)
                });
        }
    };
}]);
