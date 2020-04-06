app.factory('WarehouseFactory', ['$http', function ($http) {
    var warehouseFactory = {};

    warehouseFactory.create = function (product) {
        return $http(getReq('POST', 'api/warehouse', product, ''));
    }

    warehouseFactory.getAll = function () {
        return $http(getReq('GET', 'api/warehouse', '', ''));
    }

    warehouseFactory.getById = function (id) {
        return $http(getReq('GET', 'api/warehouse/'+id, '', ''));
    }

    return warehouseFactory;
}]);
