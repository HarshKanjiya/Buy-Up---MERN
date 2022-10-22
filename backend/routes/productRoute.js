const express = require('express')
const { getAllProduct, createProduct, updateProduct, deleteProduct, getSingleProduct } = require('../controllers/productcontroller')
const { isAuthenticatedUser,authorixedRoles } = require('../middleware/auth')

const router = express.Router()

router.route("/products").get(getAllProduct)
router.route("/product/new").post(isAuthenticatedUser , authorixedRoles("admin") ,createProduct)
router.route("/product/:id").put(isAuthenticatedUser ,  authorixedRoles("admin") ,updateProduct).delete(isAuthenticatedUser,  authorixedRoles("admin") ,deleteProduct).get(getSingleProduct)


module.exports = router