const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

// Public
router.get("/", getProducts);
router.get("/:id", getProductById);

// Admin (protected)
router.post("/", authMiddleware, createProduct);
router.put("/:id", authMiddleware, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;
