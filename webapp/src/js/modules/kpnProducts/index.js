var ProductsListDirective = require('./directives/productsList/index.js');
var ProductDetailsDirective = require('./directives/productDetails/index.js');

angular.module('kpnProducts', [])
    .directive('kpnProductsList', ProductsListDirective)
    .directive('kpnProductDetails', ProductDetailsDirective);