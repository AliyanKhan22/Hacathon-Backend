// backend/models/Log.js
const mongoose = require("mongoose");

// Create Schema for Logs
const LogSchema = new mongoose.Schema({
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create the model from schema
module.exports = mongoose.model("Log", LogSchema);
