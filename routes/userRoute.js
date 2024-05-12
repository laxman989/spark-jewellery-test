const express = require("express");
const { registerUser, loginUser, logoutUser, getUserDetails, updatePassword, updateProfile, getUserDetailsAdmin, getUsersListAdmin, updateUserRole, deleteUser, forgotPassword, resetPassword } = require("../controllers/userController");
const { authUser, authRole } = require("../middlewares/auth");
const router = express.Router();

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/user/logout", logoutUser);

router.get("/user/me", authUser, getUserDetails);
router.put("/user/password/update", authUser, updatePassword);
router.put("/user/profile/update", authUser, updateProfile);

router.post("/password/forgot", forgotPassword);
router.put("/password/reset/:resetToken", resetPassword);

router.get("/admin/users", authUser, authRole("Admin"), getUsersListAdmin);
router.get("/admin/user/:userId", authUser, authRole("Admin"), getUserDetailsAdmin);
router.put("/admin/user/:userId", authUser, authRole("Admin"), updateUserRole);
router.delete("/admin/user/:userId", authUser, authRole("Admin"), deleteUser);

module.exports = router;