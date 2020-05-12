app.controller('ProductController', ['$scope', '$rootScope', '$location', '$window', '$routeParams', 'ProductService', 'ReviewService', 'ProductCategoryFactory', 'CartService', 'WarehouseService', 'BlockChainService',
    function ($scope, $rootScope, $location, $window, $routeParams, ProductService, ReviewService, ProductCategoryFactory, CartService, WarehouseService, BlockChainService) {

    $scope.allCategories = [];
    $scope.addToCartQty = '';
    $scope.warehouse = {};
    $scope.allWarehouses = [];

    $scope.newProduct = {
        name:'',
        farmerPrice:null,
        retailPrice:null,
        productCategory:null,
        description:'',
        expiryDate:null
    };

    $scope.user = getUser();

    if ($routeParams.id) {
        if ($location.path().includes("/BuyProduct")){
            $rootScope.menuHtml = "menu/customerMenu.html";
        }
        $scope.id = $routeParams.id;
        console.log($scope.id);
        $scope.product = {};

        WarehouseService.getAllWarehouses(function (result) {
            $scope.allWarehouses = result;
        });

        ProductService.getProductById($scope.id, function (data) {
            $scope.product = data;

            if ($scope.product.productCategory.name == "Fruit") {
                $scope.product.image = "fruit.jpg";
            }else if ($scope.product.productCategory.name == "Vegetable") {
                $scope.product.image = "vegetable.jpg";
            }else if ($scope.product.productCategory.name == "Juice") {
                $scope.product.image = "juice.jpg";
            }
            console.log(data);
            for (var i = 0; i < $scope.blockChain.blockChain.length; i++) {
                var words = $scope.blockChain.blockChain[i].data.split(" ");
                if (words.length > 1 && words[1] == $scope.product.id){
                    console.log($scope.blockChain.blockChain[i]);
                }
            }
        });

        $scope.newReview = {content:'', user:{id:getCookie("user_id"), email:getCookie("user_email")}, product:{id:$scope.id}};

        $scope.submitReview = function () {
            ReviewService.create($scope.newReview, function (data) {
                $scope.newReview.content = '';
                $scope.getReviews();
            });
        }

        $scope.getReviews = function () {
            ReviewService.getReviewsByProductId($scope.id, function (data) {
                $scope.allReviews = data;
                console.log(data);
                var priceCount = 0;
                var tasteCount = 0;
                var qualityCount = 0;
                var positiveCount = 0;
                var negativeCount = 0;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].sentiment != "Neutral"){
                        if (data[i].aspect == 'Price'){
                            priceCount++;
                        }else if (data[i].aspect == 'Quality'){
                            qualityCount++;
                        }else if (data[i].aspect == 'Taste'){
                            tasteCount++;
                        }

                        if (data[i].sentiment == "Positive"){
                            positiveCount++;
                        }else {
                            negativeCount++;
                        }
                    }
                }

                new Chart(document.getElementById("doughnut-chart"), {
                    type: 'doughnut',
                    data: {
                        labels: ["Price", "Taste", "Quality"],
                        datasets: [
                            {
                                label: "Population (millions)",
                                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
                                data: [priceCount,tasteCount,qualityCount]
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Review aspects'
                        }
                    }
                });

                new Chart(document.getElementById("doughnut-chart2"), {
                    type: 'doughnut',
                    data: {
                        labels: ["Positive", "negative"],
                        datasets: [
                            {
                                label: "Population (millions)",
                                backgroundColor: ["#3e95cd", "#8e5ea2"],
                                data: [positiveCount,negativeCount]
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Review Sentiment'
                        }
                    }
                });
            });
        }

        $scope.getReviews();

        $scope.certifyProduct = function () {
            $scope.product.approved = true;
            $scope.updateProduct($scope.product);
        }

        $scope.declineProduct = function () {
            $scope.product.approved = false;
            $scope.updateProduct($scope.product);
        }

        $scope.updateProduct = function (product) {
            ProductService.create(product, function (data) {
                console.log(data);
            });
        }

    }

    ProductCategoryFactory.getAll()
        .then(function (response) {
            $scope.allCategories = response.data;
        }), function (error) {
        console.log(error);
    }

    $scope.submitNewProduct = function () {
        if ($scope.newProduct.name != '' || $scope.farmerPrice != null) {
            $scope.newProduct.productType = getCookie("user_type");
            $scope.newProduct.user = {};
            $scope.newProduct.user.id = getCookie("user_id");
            console.log($scope.newProduct);
            ProductService.create($scope.newProduct, function (data) {
                console.log(data);
                $window.history.back();
                // if (getCookie("user_type") == "FARMER") {
                //     $location.url('/Farmer');
                // }else if (getCookie("user_type") == "MANUFACTURER") {
                //     $location.url('/Manufacturer');
                // }
            });
        }else {
            alert("Please fill the form");
        }
    }

    $scope.goBackToFarmer = function () {
        $location.url('/Farmer');
    }



    $scope.addToCart = function () {
        console.log($scope.product);
        var cartItem = {};
        cartItem.product = $scope.product;
        cartItem.qty = $scope.addToCartQty;
        cartItem.warehouse

        CartService.createCartItem(cartItem, function (result) {
            if (result.id){
                alert("Added to cart");
            }
        });
    }


}]);
