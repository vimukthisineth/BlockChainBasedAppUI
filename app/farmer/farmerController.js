app.controller('FarmerController', ['$scope', '$rootScope', '$location', 'FarmerFactory', 'FarmerService', 'ProductService', 'LoginService', function ($scope, $rootScope, $location, FarmerFactory, FarmerService, ProductService, LoginService) {
    $scope.title = "Home";

    $rootScope.menuHtml = "menu/farmerMenu.html";

    $scope.allFarmers = null;
    $scope.allProducts = null;

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
            $scope.allProducts = data;
            console.log(data);
        });
    }

    $scope.getAllProducts();

    $scope.goToProduct = function (id) {
        $location.url('/Product/'+id);
    }

}])
