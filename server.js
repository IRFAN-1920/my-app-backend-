const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Schemas
const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: String,
    price: Number,
    unit: String,
    image: String,
  })
);

const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    items: Array,
    total: Number,
    customer: String,
    deliveryDate: String,
    createdAt: { type: Date, default: Date.now },
  })
);

// ROUTES
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/api/orders", async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});

app.get("/api/orders", async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
