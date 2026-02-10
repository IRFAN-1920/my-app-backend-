const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ---------- Middleware ----------
app.use(cors());
app.use(express.json());

// ---------- MongoDB Connect ----------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ---------- Test Route ----------
app.get("/", (req, res) => {
  res.send("🥨 Habeebi Snacks Backend Running");
});

// ---------- Sample Products API ----------
app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Mixture", price: 240 },
    { id: 2, name: "Paruppu Vadaam", price: 300 },
    { id: 3, name: "Laddu", price: 200 }
  ]);
});

// ---------- Order API ----------
app.post("/api/order", (req, res) => {
  const order = req.body;
  console.log("🛒 New Order:", order);

  res.json({
    message: "Order placed successfully",
    orderId: "HB" + Date.now(),
  });
});

// ---------- Server ----------
app.listen(PORT, () => {
  console.log(`🚀 Habeebi Snacks Server running on port ${PORT}`);
});
