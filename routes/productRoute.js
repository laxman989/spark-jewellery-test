const express = require("express");
const { authUser, authRole } = require("../middlewares/auth");
const { getProducts, getProduct, getProductsList, createProduct, deleteProduct, updateProduct, getReviews, createReview, deleteReview } = require("../controllers/productController");
const router = express.Router();

router.get("/products", getProducts);
router.get("/product/:productId", getProduct);

router.get("/product/reviews", getReviews);
router.put("/product/review", authUser, createReview);
router.delete("/product/review", authUser, deleteReview);

router.get("/admin/products", authUser, authRole("Admin", "Seller"), getProductsList);
router.post("/admin/product/new", authUser, authRole("Admin", "Seller"), createProduct);
router.put("/admin/product/:productId/update", authUser, authRole("Admin", "Seller"), updateProduct);
router.delete("/admin/product/:productId/delete", authUser, authRole("Admin", "Seller"), deleteProduct);


module.exports = router;
