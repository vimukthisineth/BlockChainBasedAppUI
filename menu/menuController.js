app.controller('MenuController', ['$scope', '$rootScope', 'LoginService', '$location', function ($scope, $rootScope, LoginService, $location) {
    $scope.logOut = function () {
        LoginService.logOut();
    }

    $scope.goToLogin = function () {
        $location.url('/Login');
    }

    $scope.goToCart = function () {
        $location.url('/Cart');
    }

    $rootScope.user = getUser();
}]);
