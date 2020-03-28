app.factory('CartFactory', ['$http', function ($http) {
    var cartFactory = {};

    cartFactory.createCartItem = function (cartItem) {
        return $http(getReq('POST', 'api/cartItem', cartItem, ''));
    }

    cartFactory.getByUser = function (user) {
        return $http(getReq('POST', 'api/cartItemsByUser', user, ''));
    }

    cartFactory.removeCartItem = function (cartItem) {
        return $http(getReq('POST', 'api/removeCartItem', cartItem, ''));
    }

    return cartFactory;
}]);
