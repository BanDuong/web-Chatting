import express from "express";
import { loginUser, logoutUser, signupUser } from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/login",loginUser);
authRouter.post("/logout",logoutUser);
authRouter.post("/signup",signupUser);

export default authRouter;