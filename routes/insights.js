// backend/routes/insights.js
const express = require("express");
const router = express.Router();
const Beneficiary = require("../models/Beneficiary");

// Get Daily Insights
router.get("/daily-insights", async (req, res) => {
  try {
    const newVisitors = await Beneficiary.countDocuments({ purpose: "new" });
    const returningVisitors = await Beneficiary.countDocuments({ purpose: "returning" });

    const departmentStats = await Beneficiary.aggregate([
      { $group: { _id: "$purpose", count: { $sum: 1 } } },
    ]);

    res.json({ newVisitors, returningVisitors, departmentStats });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
