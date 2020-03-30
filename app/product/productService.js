app.service('ProductService', ['$rootScope', 'ProductFactory', function ($rootScope, ProductFactory) {
    this.create = function (product, callback) {
        ProductFactory.create(product)
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log("Error while creating product: "+error.toString());
        }
    }

    this.getAllProducts = function (callback) {
        ProductFactory.getAll()
            .then(function (response) {
                console.log(response.data);
                callback(response.data);
            }), function (error) {
            console.log(error);
        }
    }

    this.getProductById = function (id, callback) {
        ProductFactory.getById(id)
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log(error);
        }
    }

}]);
