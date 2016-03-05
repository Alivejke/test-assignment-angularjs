var ProductsListDirective = require('./directives/productsList/index.js');

angular.module('kpnProducts', [])
    .directive('kpnPruductsList', ProductsListDirective);