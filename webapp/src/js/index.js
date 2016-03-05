var ProductService = require('./src/services/product/index.js');
var config = require('./src/ngConfig.js');

angular.module('kpnApp', [
        'ui.router',
        'ngResource',

        'kpnProducts'
    ])

    .service('Product', ProductService)

    .config(config);