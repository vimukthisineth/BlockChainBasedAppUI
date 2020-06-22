app.factory('distributorPurchaseFactory', ['$http', function ($http) {
    var distributorPurchaseFactory = {};

    distributorPurchaseFactory.create = function (distributorPurchase) {
        return $http(getReq('POST', 'api/distributorPurchase', distributorPurchase, ''));
    }

    distributorPurchaseFactory.getAll = function () {
        return $http(getReq('GET', 'api/distributorPurchases', '', ''));
    }

    return distributorPurchaseFactory;
}]);
