var countSubscriptionPrices = require('./src/countSubscriptionPrices');

function productDetailsController ($scope, $routeParams, Product) {
    var id = $routeParams.id;

    Product.get({id: id}).$promise.then(function (product) {
        product.subscriptions = product.subscriptions.map(function (subscription) {
            return countSubscriptionPrices({
                devicePrice: product.price,
                subscription: subscription
            });
        });
        $scope.product = product;
    });
}

productDetailsController.$inject = ['$scope', '$routeParams', 'Product'];

module.exports = productDetailsController;