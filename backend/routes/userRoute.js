const express = require("express");
const {
  registerUser,
  loginUser,
  logOut,
  forgotPassword,
  resetPassword,
  userDetails,
  updatePassword,
  updateProfile,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorixedRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logOut);
router.route("/profile").get(isAuthenticatedUser, userDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

// admin
router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorixedRoles("admin"), getAllUsers);
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorixedRoles("admin"), getSingleUser)
  .put(isAuthenticatedUser, authorixedRoles("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorixedRoles("admin"), deleteUser);

module.exports = router;
