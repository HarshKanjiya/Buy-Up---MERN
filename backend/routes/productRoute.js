const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  createProductReview,
  getAllReviewOfSingleProduct,
  deleteReview,
  getAdminProducts,
  getProductsFromCatogry,
} = require("../controllers/productcontroller");
const { isAuthenticatedUser, authorixedRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProduct);
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorixedRoles("admin"), createProduct);
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorixedRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorixedRoles("admin"), deleteProduct);
router.route("/product/:id").get(getSingleProduct);

router.route("/product/fromcategory").post(getProductsFromCatogry)

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorixedRoles("admin"), getAdminProducts);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getAllReviewOfSingleProduct)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
