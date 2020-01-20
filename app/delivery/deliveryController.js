app.controller('DeliveryController', ['$scope', '$rootScope', '$location', '$routeParams', 'DeliveryService', 'ProductService', function ($scope, $rootScope, $location, $routeParams, DeliveryService, ProductService) {

    $scope.allProducts = [];
    $scope.user = getUser();

    $scope.newDelivery = {};
    $scope.newDelivery.user = $scope.user;
    
    $scope.submitNewDelivery = function () {
        DeliveryService.newDelivery($scope.newDelivery, function (data) {
            console.log(data);
            $location.url('/Distributor');
        });
    }

    $scope.goBackToDistributor = function () {
        $location.url('/Distributor');
    }


    $scope.getAllProducts = function () {
        ProductService.getAllProducts(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].productType == "MANUFACTURER"){
                    $scope.allProducts.push(data[i]);
                }
            }
        });
        console.log($scope.allProducts);
    }

    $scope.getAllProducts();

    if ($routeParams.id) {
        $scope.id = $routeParams.id;
        $scope.delivery = {};

        DeliveryService.getDeliveryById($scope.id, function (data) {
            $scope.delivery = data;
            console.log(data);
        });
    }

    $scope.goToProduct = function (id) {
        $location.url('/Product/'+id);
    }

}]);
