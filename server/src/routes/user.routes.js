import { Router } from "express";
import {
  registerUser,
  loginUser,
  getCredits,
} from "../controllers/users.controller.js";
import { userAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// protectected routes
router.route("/credits").get(userAuth, getCredits);
export default router;
