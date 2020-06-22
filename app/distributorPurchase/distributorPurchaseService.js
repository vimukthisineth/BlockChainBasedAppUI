app.service('distributorPurchaseService', ['distributorPurchaseFactory', function (distributorPurchaseFactory) {
    this.create = function (distributorPurchase, callback) {
        distributorPurchaseFactory.create(distributorPurchase)
            .then(function (response) {
                console.log(response.data);
                callback(response.data);
            }, function (error) {
                console.log(error);
                callback(error);
            });
    }

    this.getAll = function (callback) {
        distributorPurchaseFactory.getAll()
            .then(function (response) {
                console.log(response.data);
                callback(response.data);
            }, function (error) {
                console.log(error);
                callback(error);
            });
    }
}]);
