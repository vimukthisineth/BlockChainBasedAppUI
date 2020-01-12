app.controller('MenuController', ['$scope', '$rootScope', 'LoginService', function ($scope, $rootScope, LoginService) {
    $scope.logOut = function () {
        LoginService.logOut();
    }
}]);
