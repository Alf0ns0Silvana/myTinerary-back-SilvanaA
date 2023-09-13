import express from "express";
import authController from '../controllers/auth.controllers.js';
import { accountExistsSignin } from "../middlewares/auth/accountExistsSignin.middleware.js";
import { accountExistsSignup } from "../middlewares/auth/accountExistsSignup.middleware.js";
import { accountHasBeenVerified } from "../middlewares/auth/accountHasBeenVerified.middleware.js";
import { passwordIsOk } from "../middlewares/auth/passwordIsOk.middleware.js";
import { createUserSchema } from "../schema/user.schema.js";
import passport from "../middlewares/auth/passport.js";
import { validator } from "../middlewares/validator.js";

const { signUp, signIn, signOut, token, googleSignin } = authController;

const router = express.Router();

router.post('/signup',  validator(createUserSchema), accountExistsSignup, signUp)

router.post('/signin',  validator(createUserSchema), accountExistsSignin, accountHasBeenVerified, passwordIsOk, signIn)

router.post('/google', googleSignin)

router.post('/signout', passport.authenticate('jwt', {session:false}), signOut )

router.post('/token', passport.authenticate('jwt', {session:false}), token)

export default router;