angular.module('kpnApp', [
        'ui.router',

        'kpnProducts'
    ])

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/products');

        $stateProvider
            .state('products-list', {
                url: '/products',
                template: '<div data-kpn-products-list>123</div>'
            })
            .state('product-details', {
                url: '/products/:id',
                template: '<div data-kpn-product-details></div>'
            })
    });