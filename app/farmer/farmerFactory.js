app.factory('FarmerFactory', ['$http', function ($http) {
    var farmerFactory = {};

    farmerFactory.getAllFarmers = function () {
        return $http.get(restBaseUrl+'api/farmers');
    }

    farmerFactory.create = function (farmer) {
        return $http.post(restBaseUrl+'/api/farmers', farmer);
    }

    return farmerFactory;
}]);
