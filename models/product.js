const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  unit: String, // "kg" or "pcs"
  image: String,
});

module.exports = mongoose.model("Product", productSchema);
