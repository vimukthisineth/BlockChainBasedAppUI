app.controller('AgencyController', ['$scope', '$rootScope', '$location', 'ProductService', function ($scope, $rootScope, $location, ProductService) {
    $rootScope.menuHtml = "menu/agencyMenu.html";
    $scope.allProducts = [];
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
