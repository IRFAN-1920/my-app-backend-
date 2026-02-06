const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

router.post("/", async (req, res) => {
  const order = await Order.create(req.body);
  res.json({ success: true });
});

router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

module.exports = router;
