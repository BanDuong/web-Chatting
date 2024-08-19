import express from "express";
import { sendMessage } from "../controller/message.controller.js";
import protectRouter from "../middleware/protectRouter.js";

const messageRouter = express.Router();

messageRouter.post("/send/:userId", protectRouter,sendMessage);

export default messageRouter;
