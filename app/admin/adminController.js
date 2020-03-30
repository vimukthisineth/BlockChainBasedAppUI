app.controller('AdminController', ['$scope', '$rootScope', '$location', 'CartService', 'ProductService', 'CartService', 'LoginService',
    function ($scope, $rootScope, $location, CartService, ProductService, CartService, LoginService) {

    $rootScope.menuHtml = "menu/adminMenu.html";
    $scope.loading = false;

    $scope.hidePurchases = true;
    $scope.hideProducts = true;
    $scope.hideUsers = true;

    $scope.expandPurchases = function () {
        $scope.hidePurchases = false;
        $scope.hideProducts = true;
        $scope.hideUsers = true;

        CartService.getAllPurchases(function (result) {
            $scope.allPurchases = result;
        });
    }

    $scope.expandProducts = function () {
        $scope.hidePurchases = true;
        $scope.hideProducts = false;
        $scope.hideUsers = true;

        ProductService.getAllProducts(function (result) {
            $scope.allProducts = result;
        });
    }

    $scope.expandUsers = function () {
        $scope.hidePurchases = true;
        $scope.hideProducts = true;
        $scope.hideUsers = false;

        LoginService.getAllUsers(function (result) {
            $scope.allUsers = result;
        });
    }

}]);
