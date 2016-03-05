function ngConfig ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/products');

    $stateProvider
        .state('productsList', {
            url: '/products',
            template: '<div data-kpn-products-list>123</div>'
        })
        .state('productDetails', {
            url: '/products/:id',
            template: '<div data-kpn-product-details></div>'
        })
}

module.exports = ngConfig;