var controller = require('../../controllers/ProductsListController/index.js');
var template = require('../../templates/products-list.html');


function ProductsList () {
    return {
        restrict: 'A',
        controller: controller,
        template: template
    }
}

ProductsList.$inject = [];

module.exports = ProductsList;