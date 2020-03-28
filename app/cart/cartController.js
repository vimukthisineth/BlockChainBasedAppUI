app.controller('CartController', ['$scope', '$rootScope', '$location', 'CartService', function ($scope, $rootScope, $location, CartService) {
    $rootScope.menuHtml = "menu/customerMenu.html";
    if (!$rootScope.user.id){
        $location.url('/Customer');
    }

    $scope.allCartItems = [];
    $scope.cartTotal = 0;

    $scope.getAllCartItems = function(){
        $scope.cartTotal = 0;
        CartService.getByUser(function (result) {
            $scope.allCartItems = result;
            for (var i = 0; i < $scope.allCartItems.length; i++) {
                if ($scope.allCartItems[i].product.productType == 'FARMER'){
                    $scope.cartTotal += $scope.allCartItems[i].qty * $scope.allCartItems[i].product.farmerPrice;
                }else {
                    $scope.cartTotal += $scope.allCartItems[i].qty * $scope.allCartItems[i].product.retailPrice;
                }
            }
        });
    }

    $scope.getAllCartItems();

    $scope.removeCartItem = function (cartItem) {
        CartService.removeCartItem(cartItem, function (result) {
            if (result == 1){
                alert("Item removed");
            }
            $scope.getAllCartItems();
        });
    }

}]);
