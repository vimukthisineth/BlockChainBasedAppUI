app.factory('ReviewFactory', ['$http', function ($http) {
    var reviewFactory = {};

    reviewFactory.create = function (review) {
        return $http(getReq('POST', 'api/products/reviews', review));
    }

    reviewFactory.getReviewsByProductId = function (id) {
        return $http(getReq('GET', 'api/products/reviewsByProduct/'+id, ''));
    }

    return reviewFactory;
}])
