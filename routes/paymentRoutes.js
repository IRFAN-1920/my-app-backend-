const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const Order = require("../models/Order");

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// 1. create order
router.post("/create-order", async (req, res) => {
  const options = {
    amount: req.body.amount * 100,
    currency: "INR",
    receipt: "order_" + Date.now(),
  };

  const order = await razorpay.orders.create(options);
  res.json(order);
});

// 2. verify payment
router.post("/verify", async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    orderDetails,
  } = req.body;

  const sign =
    razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSign = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(sign)
    .digest("hex");

  if (expectedSign !== razorpay_signature) {
    return res.status(400).json({ success: false });
  }

  const newOrder = new Order({
    ...orderDetails,
    paymentId: razorpay_payment_id,
    orderId: razorpay_order_id,
    paymentStatus: "PAID",
  });

  await newOrder.save();

  res.json({
    success: true,
    dbOrderId: newOrder._id,
  });
});

module.exports = router;
