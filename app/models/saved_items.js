var mongoose = require('mongoose');

module.exports = mongoose.model('saved_items', {
    address_id: String,
    item_id: String
});

