app.controller('WarehouseController', ['$scope', '$rootScope', '$location', 'WarehouseService', function ($scope, $rootScope, $location, WarehouseService) {
    $rootScope.menuHtml = "menu/distributorMenu.html";

    $scope.newWarehouse = {};

    $scope.create = function () {
        WarehouseService.create($scope.newWarehouse, function (result) {
            $scope.newWarehouse = {};
            $scope.getAll();
            // alert("Warehouse added");
        });
    }

    $scope.getAll = function () {
        WarehouseService.getAllWarehouses(function (result) {
            $scope.allWarehouses = result;
        });
    }

    $scope.getAll();

    $scope.goToHome = function(){
        $location.url('/Distributor');
    }

}]);
