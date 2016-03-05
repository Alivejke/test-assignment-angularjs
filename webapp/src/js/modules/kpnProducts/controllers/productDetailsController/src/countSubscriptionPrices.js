function countSubscriptionPrices (options) {
    var subscription = options.subscription;
    var devicePrice = options.devicePrice;
    
    subscription.deviceFinalPrice = devicePrice - subscription.deviceDiscount;
    subscription.finalPrice = subscription.price - subscription.discount;

    return subscription;
}

module.exports = countSubscriptionPrices;