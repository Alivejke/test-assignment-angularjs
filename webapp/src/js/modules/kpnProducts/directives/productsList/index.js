var controller = require('../../controllers/ProductsListController/index.js');

function ProductsList () {
    return {
        restrict: 'A',
        controller: controller,
        templateUrl: 'products-list.html'
    }
}

ProductsList.$inject = [];

module.exports = ProductsList;