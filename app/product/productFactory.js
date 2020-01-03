app.factory('ProductFactory', ['$http', function ($http) {
    var productFactory = {};

    productFactory.create = function (product) {
        return $http(getReq('POST', 'api/products', product));
    }

    return productFactory;
}]);
