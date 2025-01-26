// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const beneficiaryRoutes = require('./routes/insights');
const logRoutes = require('./routes/logs');
const searchRoutes = require('./routes/search');

// Connect to MongoDB
connectDB();

// Set up Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // To parse JSON body
app.use('/api/insights', beneficiaryRoutes);
app.use('/api/logs', logRoutes);
app.use('/api/search', searchRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
