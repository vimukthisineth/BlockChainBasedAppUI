app.service('WarehouseService', ['$rootScope', 'WarehouseFactory', function ($rootScope, WarehouseFactory) {
    this.create = function (warehouse, callback) {
        WarehouseFactory.create(warehouse)
            .then(function (response) {
                console.log(response.data);
                callback(response.data);
            }), function (error) {
            console.log("Error while creating warehouse: "+error.toString());
        }
    }

    this.getAllWarehouses = function (callback) {
        WarehouseFactory.getAll()
            .then(function (response) {
                console.log(response.data);
                callback(response.data);
            }), function (error) {
            console.log(error);
        }
    }

    this.getWarehouseById = function (id, callback) {
        WarehouseFactory.getById(id)
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log(error);
        }
    }

}]);
