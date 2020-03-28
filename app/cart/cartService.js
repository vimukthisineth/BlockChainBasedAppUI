app.service('CartService', ['$rootScope', 'CartFactory', function ($rootScope, CartFactory) {
    this.createCartItem = function (cartItem, callback) {
        cartItem.cart = {id:1};
        cartItem.cart.user = $rootScope.user;
        CartFactory.createCartItem(cartItem)
            .then(function (response) {
                console.log(response.data);
                callback(response.data);
            }), function (error) {
            console.log(error);
        }
    }

    this.getByUser = function (callback) {
        CartFactory.getByUser($rootScope.user)
            .then(function (response) {
                console.log(response.data);
                callback(response.data);
            }), function (error) {
            console.log(error);
        }
    }

    this.removeCartItem = function (cartItem, callback) {
        CartFactory.removeCartItem(cartItem)
            .then(function (response) {
                console.log(response.data);
                callback(response.data);
            }), function (error) {
            console.log(error);
        }
    }

    this.checkout = function (checkoutDto, callback) {
        CartFactory.checkout(checkoutDto)
            .then(function (response) {
                console.log(response.data);
                callback(response.data);
            }), function (error) {
            console.log(error);
        }
    }

}]);
