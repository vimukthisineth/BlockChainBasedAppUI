app.controller('CustomerController', ['$scope', '$rootScope', 'ProductService', '$location', function ($scope, $rootScope, ProductService, $location) {
    $rootScope.menuHtml = "menu/customerMenu.html";

    $scope.allProducts = [];

    ProductService.getAllProducts(function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].productType == "MANUFACTURER"){
                if (data[i].productCategory.name == "Fruit") {
                    data[i].image = "fruit.jpg";
                }else if (data[i].productCategory.name == "Vegetable") {
                    data[i].image = "vegetable.jpg";
                }else if (data[i].productCategory.name == "Juice") {
                    data[i].image = "juice.jpg";
                }
                $scope.allProducts.push(data[i]);
            }
        }
    });
    console.log($scope.allProducts);

    $scope.goToProduct = function (id) {
        $location.url('/BuyProduct/'+id);
    }
}]);
