'use strict';
var restBaseUrl = "http://localhost:8080/";

var app = angular.module('myApp', ['ngRoute']);

app.controller('MainController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $rootScope.menuHtml = "";
    $rootScope.user = {};

}]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {templateUrl: 'pages/login.html', controller: 'LoginController'});
    $routeProvider.when('/Signup', {templateUrl: 'pages/signup.html', controller: 'LoginController'});
    $routeProvider.when('/Farmer', {templateUrl: 'pages/farmer.html', controller: 'FarmerController'});
    $routeProvider.when('/Manufacturer', {templateUrl: 'pages/manufacturer.html', controller: 'ManufacturerController'});
    $routeProvider.when('/NewProduct', {templateUrl: 'pages/new_product.html', controller: 'ProductController'});
    $routeProvider.when('/Product/:id', {templateUrl: 'pages/view_product.html', controller: 'ProductController'});
    $routeProvider.when('/Agency', {templateUrl: 'pages/agency.html', controller: 'AgencyController'});


    // $locationProvider.html5Mode(true);
}]);


function getReq(method, url, data, params){
    var token = getCookie("user_token");
    var req = {
        method: method,
        url: restBaseUrl+url,
        headers: {
            'Token': token + ''
        },
        data: data,
        params: params
    }
    return req;
}

function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (10*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getUser() {
    var user = {};
    user.id = getCookie("user_id");
    user.userType = getCookie("user_type");
    user.email = getCookie("user_email");
    user.token = getCookie("user_token");
    return user;
}
