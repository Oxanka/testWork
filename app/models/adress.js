var mongoose = require('mongoose');

module.exports = mongoose.model('address', {
    shop_city: String,
    shop_street: String,
    shop_house_number:String,
    client_city: String,
    client_street: String,
    client_house_number: String,
    price: Number
});
