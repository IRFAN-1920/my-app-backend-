const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
GET  /api/products
POST /api/order


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const MONGO_URI = "mongodb://127.0.0.1:27017/habeebi_snacks";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err.message));

app.get("/", (req, res) => {
  res.send("🥨 Habeebi Snacks Backend Running");
});

app.listen(PORT, () => {
  console.log(`🚀 Habeebi Snacks Server running on port ${PORT}`);
});
