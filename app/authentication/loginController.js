app.controller('LoginController', ['$scope', '$rootScope', '$location', 'LoginService', function ($scope, $rootScope, $location, LoginService) {

    $rootScope.menuHtml = "";

    $scope.newLogin = {email:'', password:''};
    $scope.showLoginError = false;
    $scope.loginError = "";

    $scope.login = function () {
        LoginService.attemptLogin($scope.newLogin, function (data) {
            console.log(data);
            if (data.authResponseCode == "SUCCESS") {
                $scope.showLoginError = false;
                setCookie("user_id", data.user.id);
                setCookie("user_type", data.user.userType);
                setCookie("user_email", data.user.email);
                setCookie("user_token", data.token);
                $rootScope.user = data.user;
                $rootScope.user.token = data.token;
                console.log(getCookie("user_token"));
                if (data.userType == "FARMER"){
                    $location.url('/Farmer');
                }else if (data.userType == "MANUFACTURER") {
                    $location.url('/Manufacturer');
                }else if (data.userType == "AGENCY") {
                    $location.url('/Agency');
                }else if (data.userType == "DISTRIBUTOR") {
                    $location.url('/Distributor');
                }else if (data.userType == "CUSTOMER") {
                    $location.url('/Customer');
                }
            }else {
                $scope.showLoginError = true;
                $scope.loginError = "Login failed. Please check your credentials";
            }
        });
        // $location.url('/Farmer');
    }
    
    $scope.goToSignup = function () {
        $location.url('/Signup');
    }

    $scope.createAccount = function () {
        LoginService.signup($scope.newLogin, function (data) {
            console.log(data);
            if (data.authResponseCode == "SUCCESS") {
                $location.url('/');
            }else if (data.authResponseCode == "EMAIL_ALREADY_EXIST"){
                $scope.showLoginError = true;
                $scope.loginError = "Email is already registered";
            }else {
                $scope.showLoginError = true;
                $scope.loginError = "Error occurred";
            }
        })
    }
    
}]);
