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

}]);
