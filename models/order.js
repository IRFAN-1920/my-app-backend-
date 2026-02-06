const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: Array,
  total: Number,
  customer: String,
  deliveryDate: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
