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
                // if (data[i].productType == "MANUFACTURER"){
                //     $scope.allProducts.push(data[i]);
                // }
                $scope.allProducts.push(data[i]);
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
    $scope.newDeliveryRoute.deliveries = [];
    $scope.allDeliveries = [];
    $scope.allSelectedDeliveries = [];

    $scope.loading = false;
    $scope.routeCalculated = false;
    $scope.calculatedRoute = {};
    $scope.routeUrl = {src: "https://www.google.com/maps/embed/v1/directions?key=AIzaSyAKXsRBGniwZd_0Vsm6jh2jqCGaw0u2TN4&origin=Kandy&destination=Jaffna&avoid=tolls|highways&waypoints=Kandy|Colombo|Jaffna"};

    $scope.goBackToDistributor = function () {
        $location.url('/Distributor');
    }

    $scope.getAllDeliveries = function(){
        DeliveryService.getAllDeliveriesByUserId($scope.user.id, function (data) {
            $scope.allDeliveries = data;
            console.log(data);
        });
    }

    $scope.addToList = function(){
        $scope.new = true;
        for (var i = 0; i < $scope.newDeliveryRoute.deliveries.length; i++) {
            if ($scope.newDeliveryRoute.deliveries[i].id == $scope.delivery[0].id){
                $scope.new = false;
            }
        }
        if ($scope.new == true){
            Array.prototype.push.apply($scope.newDeliveryRoute.deliveries, $scope.delivery);
        }
    }

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    $scope.getAllDeliveries();

    $scope.submitNewDeliveryRoute = function () {
        $scope.loading = true;
        $scope.routeCalculated = false;
        DeliveryService.newDeliveryRoute($scope.newDeliveryRoute, function (data) {
            $scope.loading = false;
            $scope.routeCalculated = true;
            $scope.calculatedRoute = data;
            console.log(data);
            var origin = $scope.calculatedRoute.path[0].destination;
            console.log(origin);
            var destination = $scope.calculatedRoute.path[($scope.calculatedRoute.path.length-1)].destination;
            var url = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyAKXsRBGniwZd_0Vsm6jh2jqCGaw0u2TN4&origin="+origin+"&destination="+destination+"&avoid=tolls|highways&waypoints=";
            for (var i = 0; i < $scope.calculatedRoute.path.length-1; i++) {
                url += $scope.calculatedRoute.path[i].destination+"|";
            }
            url = url.substring(0, url.length-1);
            console.log(url);
            $scope.routeUrl = {src: url,
                title: "Route"};
        });
    }

}]);
