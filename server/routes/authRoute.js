import express from 'express'
import {registerController, loginController,forgotPasswordController, testController, updateProfileController, getOrdersController,
  getAllOrdersController,
  orderStatusController,
  getAllUser,
  getUserOrdersController,
  blockUserController,
  unblockUserController,
  deleteUserController,
  updateUserController} from '../controllers/authController.js'
import { requireSignIn, isAdmin,} from "../middlewares/authMiddleware.js";
const router = express.Router()
router.post('/register', registerController);
router.post("/login", loginController);
router.get("/test", requireSignIn,isAdmin, testController);
router.get("/users", getAllUser);
router.post("/forgot-password", forgotPasswordController);
router.get("/user-auth", requireSignIn, (req, res) => {
res.status(200).send({ ok: true });
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
res.status(200).send({ ok: true });
    });
  });
router.put("/profile", requireSignIn, updateProfileController);
router.get("/orders", requireSignIn, getOrdersController);
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);
router.get('/user-orders/:userId', requireSignIn, getUserOrdersController);
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
router.put("/unblock-user/:userId", requireSignIn, isAdmin, unblockUserController);
router.put("/block-user/:userId", requireSignIn, isAdmin, blockUserController);
router.put("/update-user/:userId", requireSignIn, isAdmin, updateUserController);
router.delete("/delete-user/:userId", requireSignIn, isAdmin, deleteUserController);
export default router