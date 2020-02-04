app.controller('DeliveryController', ['$scope', '$rootScope', '$location', '$routeParams', '$sce', 'DeliveryService', 'ProductService', function ($scope, $rootScope, $location, $routeParams, $sce, DeliveryService, ProductService) {
    $rootScope.menuHtml = "menu/distributorMenu.html";

    $scope.allProducts = [];
    $scope.user = getUser();

    $scope.newDelivery = {};
    $scope.newDelivery.user = $scope.user;
    $scope.routeUrl = "";

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
    
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
            $scope.routeUrl = {src: "https://www.google.com/maps/embed/v1/directions?key=AIzaSyAKXsRBGniwZd_0Vsm6jh2jqCGaw0u2TN4&origin="+$scope.delivery.origin+"&destination="+$scope.delivery.destination+"&avoid=tolls|highways",
            title: "Route"};
        });
    }

    $scope.goToProduct = function (id) {
        $location.url('/Product/'+id);
    }

}]);

app.controller('DeliveryRouteController', ['$scope', '$rootScope', '$location', '$routeParams', '$sce', 'DeliveryService', 'ProductService', function ($scope, $rootScope, $location, $routeParams, $sce, DeliveryService, ProductService) {
    $rootScope.menuHtml = "menu/distributorMenu.html";

    $scope.user = getUser();
    $scope.newDeliveryRoute = {};

    $scope.goBackToDistributor = function () {
        $location.url('/Distributor');
    }

    $scope.getAllDeliveries = function(){
        DeliveryService.getAllDeliveriesByUserId($scope.user.id, function (data) {
            $scope.allDeliveries = data;
            console.log(data);
        });
    }

    $scope.getAllDeliveries();


}]);
