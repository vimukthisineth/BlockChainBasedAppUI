app.controller('ManufacturerController', ['$scope', '$rootScope', '$location', 'ProductService', function ($scope, $rootScope, $location, ProductService) {
    $scope.title = "Manufacturer";

    $rootScope.menuHtml = "menu/manufacturerMenu.html";
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

    $scope.goToNewProduct = function () {
        $location.url('/NewProduct');
    }

    $scope.goToProduct = function (id) {
        $location.url('/Product/'+id);
    }
    
}])
