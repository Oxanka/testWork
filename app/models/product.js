var mongoose = require('mongoose');

module.exports = mongoose.model('items', {
    name: String,
    price: Number
});
