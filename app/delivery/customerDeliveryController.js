app.controller('CustomerDeliveryRouteController', ['$scope', '$rootScope', '$location', '$sce', 'WarehouseService', 'CartService', 'DeliveryService',
    function ($scope, $rootScope, $location, $sce, WarehouseService, CartService, DeliveryService) {
    $rootScope.menuHtml = "menu/distributorMenu.html";
    $scope.loading = false;

    $scope.allPurchases = [];
    $scope.selectedPurchases = [];
    $scope.newDeliveryRoute = {};
    $scope.routeUrl = "";

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    $scope.goBackToDistributor = function () {
        $location.url('/Distributor');
    }

    $scope.getAllPurchases = function () {
        $scope.loading = true;
        CartService.getAllPurchases(function (result) {
            for (var i = 0; i < result.length; i++) {
                if (!result[i].delivered){
                    $scope.allPurchases.push(result[i]);
                }
            }
            $scope.loading = false;
        });
    }

    $scope.getAllPurchases();

    $scope.addToList = function () {
        if ($scope.selectedPurchases.length > 0){
            var exists = false;
            for (var i = 0; i < $scope.selectedPurchases.length; i++) {
                if ($scope.selectedPurchases[i].id == $scope.selectedPurchase[0].id){
                    exists = true;
                }
            }
            if (!exists){
                $scope.selectedPurchases.push($scope.selectedPurchase[0]);
            }
        }else {
            $scope.selectedPurchases.push($scope.selectedPurchase[0]);
        }
    }

    $scope.submitNewDeliveryRoute = function () {
        if ($scope.selectedPurchases.length > 0){
            $scope.loading = true;
            $scope.routeCalculated = false;
            DeliveryService.newCustomerRoute($scope.selectedPurchases, function (data) {
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
    }

}]);
