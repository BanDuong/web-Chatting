import express from "express";
import { getMessage, sendMessage } from "../controller/message.controller.js";
import protectRouter from "../middleware/protectRouter.js";

const messageRouter = express.Router();

messageRouter.post("/send/:userId", protectRouter,sendMessage);
messageRouter.get("/getMes/:userId", protectRouter,getMessage);

export default messageRouter;
