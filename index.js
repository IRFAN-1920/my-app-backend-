const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("🥨 Habeebi Snacks Backend Running");
});

// Products API
app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Mixture", price: 240 },
    { id: 2, name: "Paruppu Vadaam", price: 400 },
    { id: 3, name: "Laddu", price: 5 },
    { id: 4, name: "Rava Laddu", price: 5 },
    { id: 5, name: "Pooranam", price: 15 },
    { id: 6, name: "Arisivadagam", price: 140 },
    { id: 7, name: "Penium", price: 10 },
    { id: 8, name: "Murukku", price: 5 }
  ]);
});

// Order API
app.post("/api/order", (req, res) => {
  const order = req.body;

  res.json({
    message: "Order placed successfully",
    orderId: "HB" + Date.now(),
    order
  });
});

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Habeebi Snacks Server running on port ${PORT}`);
});
