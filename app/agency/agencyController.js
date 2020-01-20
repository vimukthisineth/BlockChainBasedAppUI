app.controller('AgencyController', ['$scope', '$rootScope', 'ProductService', function ($scope, $rootScope, ProductService) {
    $rootScope.menuHtml = "menu/agencyMenu.html";
    $scope.allProducts = [];

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

//    Filters
    $scope.approved = function (product) {
        return product.approved == true;
    }
    $scope.notApproved = function (product) {
        return product.approved == false;
    }

}]);
