app.factory('FarmerFactory', ['$http', function ($http) {
    var farmerFactory = {};

    farmerFactory.getAllFarmers = function () {
        return $http(getReq('GET', 'api/farmers', '', ''));
    }

    farmerFactory.create = function (farmer) {
        return $http(getReq('POST', '/api/farmers', farmer, ''));
    }

    return farmerFactory;
}]);
