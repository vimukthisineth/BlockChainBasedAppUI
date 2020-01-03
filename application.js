'use strict';
var restBaseUrl = "http://localhost:8080/";

var app = angular.module('myApp', ['ngRoute']);

app.controller('MainController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.title = "no";

}]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/Farmer', {templateUrl: 'pages/farmer.html', controller: 'FarmerController'});
    $routeProvider.when('/Manufacturer', {templateUrl: 'pages/home.html', controller: 'ManufacturerController'});


    $locationProvider.html5Mode(true);
}]);


function getReq(method, url, data){
    var req = {
        method: method,
        url: restBaseUrl+url,
        headers: {
            'Authorization': 'access token'
        },
        data: data
    }
    return req;
}
