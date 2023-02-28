const mongoose = require('mongoose');

const schema = mongoose.Schema;

const productSchema = new schema({
    productname:{
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;