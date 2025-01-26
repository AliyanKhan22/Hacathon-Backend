// backend/models/Beneficiary.js
const mongoose = require('mongoose');

// Create Schema for Beneficiary
const beneficiarySchema = new mongoose.Schema({
    cnic: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    purpose: { type: String, default: 'new' }, // Adding purpose field
});

// Create the model from schema
module.exports = mongoose.model('Beneficiary', beneficiarySchema);
