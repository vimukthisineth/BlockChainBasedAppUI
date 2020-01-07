app.controller('ProductController', ['$scope', '$rootScope', '$location', '$routeParams', 'ProductService', 'ReviewService', function ($scope, $rootScope, $location, $routeParams, ProductService, ReviewService) {
    $scope.newProduct = {
        name:'',
        farmerPrice:null,
        retailPrice:null,
        productCategory:null
    };

    if ($routeParams.id) {
        $scope.id = $routeParams.id;
        console.log($scope.id);
        $scope.product = {};

        ProductService.getProductById($scope.id, function (data) {
            $scope.product = data;
            console.log(data);
        });

        $scope.newReview = {content:'', user:{id:getCookie("user_id"), email:getCookie("user_email")}, product:{id:$scope.id}};

        $scope.submitReview = function () {
            ReviewService.create($scope.newReview, function (data) {
                $scope.newReview = data;
                console.log(data);
            })
        }

        $scope.getReviews = function () {
            ReviewService.getReviewsByProductId($scope.id, function (data) {
                $scope.allReviews = data;
                console.log(data);
            });
        }

        // $scope.getReviews();
    }

    $scope.submitNewProduct = function () {
        if ($scope.newProduct.name != '' || $scope.farmerPrice != null) {
            ProductService.create($scope.newProduct, function (data) {
                console.log(data);
                $location.url('/Farmer');
            });
        }else {
            alert("Please fill the form");
        }
    }

    $scope.goBackToFarmer = function () {
        $location.url('/Farmer');
    }

}]);
