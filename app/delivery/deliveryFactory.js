app.factory('DeliveryFactory', ['$http', function ($http) {
    var deliveryFactory = {};

    deliveryFactory.create = function (delivery) {
        return $http(getReq('POST', 'api/delivery', delivery, ''));
    }

    deliveryFactory.getAll = function () {
        return $http(getReq('GET', 'api/deliveries', '', ''));
    }

    return deliveryFactory;
}]);
