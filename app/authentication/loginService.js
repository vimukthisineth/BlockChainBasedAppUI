app.service('LoginService', ['$rootScope', 'LoginFactory', function ($rootScope, LoginFactory) {
    this.attemptLogin = function (newLogin, callback) {
        LoginFactory.login(newLogin)
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log("Error in login: "+error);
        }
    }

    this.signup = function (newLogin, callback) {
        LoginFactory.signup(newLogin)
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log("Error in signup: "+error);
        }
    }
}]);
