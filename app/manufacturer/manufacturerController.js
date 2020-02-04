app.controller('ManufacturerController', ['$scope', '$rootScope', '$location', 'ProductService', 'ManufacturerService', function ($scope, $rootScope, $location, ProductService, ManufacturerService) {
    $scope.title = "Manufacturer";

    $rootScope.menuHtml = "menu/manufacturerMenu.html";
    $scope.allProducts = [];

    $scope.getAllProducts = function () {
        ProductService.getAllProducts(function (data) {
            for (var i = 0; i < data.length; i++) {
                $scope.allProducts = data;
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

//    Filters
    $scope.productsOfUser = function (product) {
        return product.user.id == getCookie("user_id") && product.productType == "MANUFACTURER";
    }
    $scope.productsOfOthers = function (product) {
        return product.user.id != getCookie("user_id") && product.productType == "FARMER";
    }
    
}])
