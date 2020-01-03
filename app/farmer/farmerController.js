app.controller('FarmerController', ['$scope', '$rootScope', 'FarmerFactory', 'FarmerService', function ($scope, $rootScope, FarmerFactory, FarmerService) {
    $scope.title = "Home";

    $scope.allFarmers = null;

    $scope.getAllFarmers = function () {
        FarmerService.getAllFarmers(function (data) {
            $scope.allFarmers = data;
            console.log(data);
        });
    }

    $scope.getAllFarmers();

    $scope.addNewFarmer = function () {
        FarmerService.create({id:1, name:'Test name', address:'Add'}, function (data) {
            console.log(data);
        })
    }

    $scope.addNewFarmer();

}])
