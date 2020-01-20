app.controller('DistributorController', ['$scope', '$rootScope', '$location', 'ProductService', 'DeliveryService', function ($scope, $rootScope, $location, ProductService, DeliveryService) {
    $rootScope.menuHtml = "menu/distributorMenu.html";

    $scope.allProducts = [];
    $scope.allDeliveries = [];
    $scope.user = getUser();

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

    $scope.getAllDeliveries = function(){
        DeliveryService.getAllDeliveriesByUserId($scope.user.id, function (data) {
            $scope.allDeliveries = data;
            console.log(data);
        });
    }

    $scope.getAllDeliveries();

    $scope.goToProduct = function (id) {
        $location.url('/Product/'+id);
    }

    $scope.goToNewDelivery = function(){
        $location.url('/NewDelivery');
    }

//    Filters
    $scope.approved = function (product) {
        return product.approved == true;
    }
}]);
