app.factory('LoginFactory', ['$http', function ($http) {
    var loginFactory = {};

    loginFactory.login = function (newLogin) {
        return $http(getReq('POST', 'auth/login', newLogin), '');
    }

    loginFactory.signup = function (newLogin) {
        return $http(getReq('POST', 'auth/signup', newLogin), '');
    }

    loginFactory.validateToken = function () {
        return $http(getReq('POST', 'auth/validateToken', '', {user: getCookie("user_id"), token: getCookie("user_token")}));
    }

    loginFactory.getAllUsers = function () {
        return $http(getReq('POST', 'auth/users', '', ''));
    }

    return loginFactory;
}]);
