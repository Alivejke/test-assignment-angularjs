var ProductService = require('./src/services/product/index.js');

var internetCapacityUnitsFilter = require('./src/filters/internetCapacityUnits/index.js');

var config = require('./src/ngConfig.js');

angular.module('kpnApp', [
        'ui.router',
        'ngResource',
        'ngRoute',

        'kpnProducts'
    ])

    .service('Product', ProductService)

    .filter('internetCapacityUnits', internetCapacityUnitsFilter)

    .config(config);