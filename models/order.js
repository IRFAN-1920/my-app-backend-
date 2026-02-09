const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: String,
  items: [
    {
      productName: String,
      qty: Number,
      price: Number,
    },
  ],
  totalAmount: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
