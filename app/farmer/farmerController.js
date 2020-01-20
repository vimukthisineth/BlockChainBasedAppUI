app.controller('FarmerController', ['$scope', '$rootScope', '$location', 'FarmerFactory', 'FarmerService', 'ProductService', 'LoginService', function ($scope, $rootScope, $location, FarmerFactory, FarmerService, ProductService, LoginService) {
    $scope.title = "Home";

    $rootScope.menuHtml = "menu/farmerMenu.html";

    $scope.allFarmers = null;
    $scope.allProducts = [];

    LoginService.validateToken();

    // $scope.getAllFarmers = function () {
    //     FarmerService.getAllFarmers(function (data) {
    //         $scope.allFarmers = data;
    //         console.log(data);
    //     });
    // }
    //
    // $scope.getAllFarmers();

    $scope.addNewFarmer = function () {
        FarmerService.create({id:1, name:'Test name', address:'Add'}, function (data) {
            console.log(data);
        })
    }

    $scope.goToNewProduct = function () {
        $location.url('/NewProduct');
    }

    $scope.getAllProducts = function () {
        ProductService.getAllProducts(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].productType == "FARMER"){
                    $scope.allProducts.push(data[i]);
                }
            }
        });
    }

    $scope.getAllProducts();

    $scope.goToProduct = function (id) {
        $location.url('/Product/'+id);
    }

}])
