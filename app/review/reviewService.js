app.service('ReviewService', ['$rootScope', 'ReviewFactory', 'LoginService', '$location', function ($rootScope, ReviewFactory, LoginService, $location) {

    this.create = function (review, callback) {
        // LoginService.validateToken();
        if (getCookie("user_token").length == 0){
            $location.url('/Login');
        }
        ReviewFactory.create(review)
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log(error);
            $location.url('/Login');
        }
    }

    this.getReviewsByProductId = function (id, callback) {
        ReviewFactory.getReviewsByProductId(id)
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log(error);
        }
    }
}]);
