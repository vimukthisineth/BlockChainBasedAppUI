app.factory('DeliveryFactory', ['$http', function ($http) {
    var deliveryFactory = {};

    deliveryFactory.create = function (delivery) {
        return $http(getReq('POST', 'api/delivery', delivery, ''));
    }

    deliveryFactory.createRoute = function (deliveryRoute) {
        return $http(getReq('POST', 'api/deliveryRoute', deliveryRoute, ''));
    }

    deliveryFactory.createCustomerRoute = function (purchases) {
        return $http(getReq('POST', 'api/customerDeliveryRoute', purchases, ''));
    }

    deliveryFactory.getAll = function () {
        return $http(getReq('GET', 'api/deliveries', '', ''));
    }

    deliveryFactory.getAllByUserId = function (id) {
        return $http(getReq('GET', 'api/deliveriesByUser/'+id, '', ''));
    }

    deliveryFactory.getById = function (id) {
        return $http(getReq('GET', 'api/delivery/'+id, '', ''));
    }

    deliveryFactory.getRouteById = function (id) {
        return $http(getReq('GET', 'api/deliveryRoute/'+id, '', ''));
    }

    return deliveryFactory;
}]);
