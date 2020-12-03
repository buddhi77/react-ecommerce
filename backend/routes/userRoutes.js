import express from "express";
const router = express.Router();
import {
  loginUser,
  registerUser,
  getUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/profile").get(protect, getUserProfile);

export default router;