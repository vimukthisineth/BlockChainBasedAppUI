app.controller('AdminController', ['$scope', '$rootScope', '$location', 'CartService', 'ProductService', 'CartService', 'LoginService',
    function ($scope, $rootScope, $location, CartService, ProductService, CartService, LoginService) {

    $rootScope.menuHtml = "menu/adminMenu.html";
    $scope.loading = false;

    $scope.hidePurchases = true;
    $scope.hideProducts = true;
    $scope.hideUsers = true;
    $scope.hideValidatedUsers = true;

    $scope.expandPurchases = function () {
        $scope.loading = true;
        $scope.hidePurchases = false;
        $scope.hideProducts = true;
        $scope.hideUsers = true;

        CartService.getAllPurchases(function (result) {
            $scope.allPurchases = result;
            $scope.loading = false;
        });
    }

    $scope.expandProducts = function () {
        $scope.loading = true;
        $scope.hidePurchases = true;
        $scope.hideProducts = false;
        $scope.hideUsers = true;

        ProductService.getAllProducts(function (result) {
            $scope.allProducts = result;
            $scope.loading = false;
        });
    }

    $scope.expandUsers = function () {
        $scope.loading = true;
        $scope.hidePurchases = true;
        $scope.hideProducts = true;
        $scope.hideUsers = false;

        LoginService.getAllUsers(function (result) {
            $scope.hideValidatedUsers = true;
            $scope.allUsers = result;
            $scope.loading = false;
        });
    }

    $scope.validateUsers = function () {
        $scope.loading = true;
        $scope.hidePurchases = true;
        $scope.hideProducts = true;
        $scope.hideUsers = false;

        LoginService.getAllUsersValidated(function (result) {
            $scope.hideValidatedUsers = false;
            $scope.allUsersValidated = result;
            $scope.loading = false;
        });
    }


}]);
