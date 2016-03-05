function ProductsListController ($scope, Product) {
    Product.query().$promise.then(function(products) {
        $scope.products = products;
    });
}

ProductsListController.$inject = ['$scope', 'Product'];

module.exports = ProductsListController;