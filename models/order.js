const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: String,
  phone: String,
  address: String,

  items: [
    {
      name: String,
      qty: Number,
      price: Number,
    },
  ],

  totalAmount: Number,

  paymentId: String,
  orderId: String,
  paymentStatus: String,

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
