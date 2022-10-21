const express = require('express')
const { getAllProduct, createProduct, updateProduct, deleteProduct, getSingleProduct } = require('../controllers/productcontroller')
const { isAuthenticatedUser,authorixedRoles } = require('../middleware/auth')

const router = express.Router()

router.route("/products").get(isAuthenticatedUser, authorixedRoles("admin"), getAllProduct)
router.route("/product/new").post(isAuthenticatedUser ,createProduct)
router.route("/product/:id").put(isAuthenticatedUser ,updateProduct).delete(isAuthenticatedUser ,deleteProduct).get(getSingleProduct)


module.exports = router