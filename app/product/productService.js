app.service('ProductService', ['$rootScope', 'ProductFactory', function ($rootScope, ProductFactory) {
    this.newProduct = function (product, callback) {
        ProductFactory.create(product)
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log("Error while creating product: "+error.toString());
        }
    }
}]);
