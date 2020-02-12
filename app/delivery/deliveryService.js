app.service('DeliveryService', ['$rootScope', 'ProductFactory', 'DeliveryFactory', function ($rootScope, ProductFactory, DeliveryFactory) {
    this.newDelivery = function (delivery, callback) {
        DeliveryFactory.create(delivery)
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log("Error while creating new delivery: "+error);
        }
    }

    this.getAllDeliveries = function (callback) {
        DeliveryFactory.getAll()
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log("Error while get all deliveries: "+error);
        }
    }

    this.getAllDeliveriesByUserId = function (id, callback) {
        DeliveryFactory.getAllByUserId(id)
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log("Error while get all by user id");
        }
    }

    this.getDeliveryById = function (id, callback) {
        DeliveryFactory.getById(id)
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log("Error while get delivery by id"+error);
        }
    }

    this.newDeliveryRoute = function (deliveryRoute, callback) {
        DeliveryFactory.createRoute(deliveryRoute)
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log("Error while creating new delivery route: "+error);
        }
    }

    this.getDeliveryRouteById = function (id, callback) {
        DeliveryFactory.getRouteById(id)
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log("Error while get delivery route by id"+error);
        }
    }

}]);
