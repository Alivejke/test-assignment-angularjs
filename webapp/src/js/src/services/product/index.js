function ProductService ($resource) {
    return $resource('', {}, {
        query: {
            isArray: true,
            url: '/mocks/product/productsList.json',
            method: 'GET'
        },

        get: {
            url: '/mocks/product/productDetails.json',
            method: 'GET'
        }
    });
}

ProductService.$inject = ['$resource'];

module.exports = ProductService;