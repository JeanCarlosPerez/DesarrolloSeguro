import { Router } from "express";
import { signIn, singUp } from "../controllers/authController.js";
import { checkRolesExisted, checkDuplicateUsernameorEmail } from "../middlewares/verifySignup.js";
import {limiter} from "../middlewares/rateLimit.js";

const router = Router()

router.post('/signup', [ checkDuplicateUsernameorEmail, checkRolesExisted] ,singUp)
router.post('/signin', limiter,  signIn)

export default router