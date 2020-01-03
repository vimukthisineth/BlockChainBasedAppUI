app.controller('ProductController', ['$scope', '$rootScope', 'ProductService', function ($scope, $rootScope, ProductService) {
    $scope.newProduct = {
        name:'',
        farmerPrice:null,
        retailPrice:null,
        productCategory:null
    };

    $scope.addNewProduct = function () {
        ProductService.create($scope.newProduct, function (data) {
            console.log(data);
        })
    }
}]);
