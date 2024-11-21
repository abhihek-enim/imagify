import { Router } from "express";
import { generateImage } from "../controllers/image.controller.js";
import { userAuth } from "../middlewares/auth.middleware.js";

const router = Router();
router.route("/generateImage").post(userAuth, generateImage);

export default router;
