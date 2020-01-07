app.factory('LoginFactory', ['$http', function ($http) {
    var loginFactory = {};

    loginFactory.login = function (newLogin) {
        return $http(getReq('POST', 'auth/login', newLogin));
    }

    loginFactory.signup = function (newLogin) {
        return $http(getReq('POST', 'auth/signup', newLogin));
    }

    return loginFactory;
}]);
