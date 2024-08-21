import express from "express";
import { getUserForSidebar } from "../controller/user.controller.js";
import protectRouter from "../middleware/protectRouter.js";

const userRouter = express.Router();

userRouter.get("/getUserForSidebar", protectRouter, getUserForSidebar);
export default userRouter;
