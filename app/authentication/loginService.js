app.service('LoginService', ['$rootScope', '$location', 'LoginFactory', function ($rootScope, $location, LoginFactory) {
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

    this.logOut = function () {
        setCookie("user_id", "");
        setCookie("user_type", "");
        setCookie("user_email", "");
        setCookie("user_token", "");
        $location.url('/Login');
    }

    this.validateToken = function () {
        console.log(getCookie("user_token"));
        LoginFactory.validateToken()
            .then(function (response) {
                if (!response.data){
                    $location.url('/Login');
                }
            }), function (error) {
            console.log("Error while validating token: "+error);
        }
    }

    this.getAllUsers = function (callback) {
        LoginFactory.getAllUsers()
            .then(function (response) {
                console.log(response.data);
                callback(response.data);
            }), function (error) {
            console.log(error);
        }
    }

    this.getAllUsersValidated = function (callback) {
        LoginFactory.getAllUsersValidated()
            .then(function (response) {
                console.log(response.data);
                callback(response.data);
            }), function (error) {
            console.log(error);
        }
    }

}]);
