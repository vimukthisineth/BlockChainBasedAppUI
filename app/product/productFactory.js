app.factory('ProductFactory', ['$http', function ($http) {
    var productFactory = {};

    productFactory.create = function (product) {
        return $http(getReq('POST', 'api/products', product, ''));
    }

    productFactory.getAll = function () {
        return $http(getReq('GET', 'api/products', '', ''));
    }

    productFactory.getById = function (id) {
        return $http(getReq('GET', 'api/products/'+id, '', ''));
    }

    return productFactory;
}]);

app.factory('ProductCategoryFactory', ['$http', function ($http) {
    var productCategoryFactory = {};

    productCategoryFactory.getAll = function () {
        return $http(getReq('GET', 'api/productCategories', '', ''));
    }

    return productCategoryFactory;
}]);
