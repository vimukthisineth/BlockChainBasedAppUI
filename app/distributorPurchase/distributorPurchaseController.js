app.controller('distributorPurchaseController', ['$scope', '$rootScope', '$location', 'distributorPurchaseService', 'ProductService', 'WarehouseService',
    function ($scope, $rootScope, $location, distributorPurchaseService, ProductService, WarehouseService) {

    $scope.user = getUser();
    $scope.newPurchase = {};
    $scope.newPurchase.user = {};
    $scope.newPurchase.user.id = $scope.user.id;
    console.log($scope.newPurchase);

    ProductService.getAllProducts(function (result) {
        $scope.allProducts = result;
    });

    WarehouseService.getAllWarehouses(function (result) {
        $scope.allWarehouses = result;
    });

    $scope.submitPurchase = function () {
        distributorPurchaseService.create($scope.newPurchase, function (result) {
            $scope.getAll();
        });
    }

    $scope.getAll = function(){
        distributorPurchaseService.getAll(function (result) {
            $scope.allPurchases = [];
            for (var i = 0; i < result.length; i++) {
                if (result[i].user.id == $scope.user.id){
                    $scope.allPurchases.push(result[i]);
                }
            }
        });
    }
    $scope.getAll();

    $scope.goToHome = function(){
        $location.url('/Distributor');
    }

}]);
