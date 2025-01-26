// backend/routes/logs.js
const express = require("express");
const router = express.Router();
const Log = require("../models/Log");

// Get Logs
router.get("/logs", async (req, res) => {
  try {
    const logs = await Log.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
