const express = require("express");
const Product = require("../models/products");

const router = express.Router();

// add product
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ message: "Product added" });
});

// get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
