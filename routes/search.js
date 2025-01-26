// backend/routes/search.js
const express = require("express");
const router = express.Router();
const Beneficiary = require("../models/Beneficiary");

// Search Beneficiaries
router.get("/search", async (req, res) => {
  const { query } = req.query;
  try {
    const results = await Beneficiary.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { cnic: { $regex: query } },
        { phone: { $regex: query } },
      ],
    });

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
