var countSubscriptionPrices = require('./src/countSubscriptionPrices');

function productDetailsController ($scope, $routeParams, Product) {
    var id = $routeParams.id;

    $scope.setSelectedSubscription = function (subscription) {
        $scope.selectedSubscription = subscription;
    }

    $scope.setSelectedImage = function (image) {
        $scope.selectedImage = image;
    }

    Product.get({id: id}).$promise.then(function (product) {
        product.subscriptions = product.subscriptions.map(function (subscription) {
            return countSubscriptionPrices({
                devicePrice: product.price,
                subscription: subscription
            });
        });
        $scope.product = product;

        $scope.setSelectedImage($scope.product.images[0]);
        $scope.setSelectedSubscription($scope.product.subscriptions[0]);
    });
}

productDetailsController.$inject = ['$scope', '$routeParams', 'Product'];

module.exports = productDetailsController;