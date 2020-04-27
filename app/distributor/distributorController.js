app.controller('DistributorController', ['$scope', '$rootScope', '$location', '$routeParams', 'ProductService', 'DeliveryService', 'CartService', function ($scope, $rootScope, $location, $routeParams, ProductService, DeliveryService, CartService) {
    $rootScope.menuHtml = "menu/distributorMenu.html";

    $scope.allProducts = [];
    $scope.allDeliveries = [];
    $scope.user = getUser();

    $scope.getAllProducts = function () {
        ProductService.getAllProducts(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].productType == "MANUFACTURER" || data[i].productType == "FARMER"){
                    $scope.allProducts.push(data[i]);
                }
            }
        });
        console.log($scope.allProducts);
    }

    $scope.getAllProducts();

    $scope.getAllPurchases = function () {
        $scope.loading = true;
        CartService.getAllPurchases(function (result) {
            $scope.allPurchases = result;
            $scope.loading = false;
        });
    }

    $scope.getAllPurchases();

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

    $scope.goToNewDeliveryRoute = function(){
        $location.url('/NewDeliveryRoute');
    }

    $scope.goToNewCustomerDeliveryRoute = function(){
        $location.url('/NewCustomerDeliveryRoute');
    }

    $scope.goToDelivery = function(id){
        $location.url('/Delivery/'+id);
    }

    $scope.goToWarehouses = function(){
        $location.url('/Warehouses');
    }

//    Filters
    $scope.approved = function (product) {
        return product.approved == true;
    }
}]);
