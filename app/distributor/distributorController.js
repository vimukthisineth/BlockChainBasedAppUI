app.controller('DistributorController', ['$scope', '$rootScope', '$location', 'ProductService', function ($scope, $rootScope, $location, ProductService) {
    $rootScope.menuHtml = "menu/distributorMenu.html";

    $scope.allProducts = [];
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

    $scope.goToProduct = function (id) {
        $location.url('/Product/'+id);
    }

    $scope.goToNewDelivery = function(){
        $location.url('/Product');
    }

//    Filters
    $scope.approved = function (product) {
        return product.approved == true;
    }
}]);
