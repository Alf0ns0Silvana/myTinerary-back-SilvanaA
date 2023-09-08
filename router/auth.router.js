import express from "express";
import authController from '../controllers/auth.controllers.js';
import { accountExistsSignin } from "../middlewares/auth/accountExistsSignin.middleware.js";
import { accountExistsSignup } from "../middlewares/auth/accountExistsSignup.middleware.js";
import { accountHasBeenVerified } from "../middlewares/auth/accountHasBeenVerified.middleware.js";
import { passwordIsOk } from "../middlewares/auth/passwordIsOk.middleware.js";
import { createUserSchema } from "../schema/user.schema.js";


const { signUp, signIn } = authController;

const router = express.Router();

router.post('/signup', /* validator(createUserSchema), */accountExistsSignup, signUp)

router.post('/signin', /* validator(createUserSchema), */accountExistsSignin, accountHasBeenVerified, passwordIsOk, signIn)


export default router;