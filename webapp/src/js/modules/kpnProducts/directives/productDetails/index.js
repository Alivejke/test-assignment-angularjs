var controller = require('../../controllers/ProductDetailsController/index.js');
var template = require('../../templates/product-details.html');


function ProductDetails () {
    return {
        restrict: 'A',
        controller: controller,
        template: template
    }
}

ProductDetails.$inject = [];

module.exports = ProductDetails;