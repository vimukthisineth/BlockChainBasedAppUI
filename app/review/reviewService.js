app.service('ReviewService', ['$rootScope', 'ReviewFactory', function ($rootScope, ReviewFactory) {

    this.create = function (review, callback) {
        ReviewFactory.create(review)
            .then(function (response) {
                callback(response.data);
            }), function (error) {
            console.log(error);
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
