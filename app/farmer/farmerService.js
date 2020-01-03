app.service('FarmerService', ['$rootScope', 'FarmerFactory', function ($rootScope, FarmerFactory) {

    this.getAllFarmers = function (callback) {
        FarmerFactory.getAllFarmers()
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log("Error while getting all farmers: "+error.toString());
        }
    }

    this.create = function (farmer, callback) {
        FarmerFactory.create(farmer)
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log("Error while creating farmer: "+error.toString());
        }
    }
    
}]);
