const mongoose = require('mongoose');

const schema = mongoose.Schema;

const customerSchema = new schema({
    customername:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength:3
    },
 }, {
        timestamps: true
    
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;