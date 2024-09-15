import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import path from 'path';
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRouter from "./router/auth.router.js";
// import homePageRouter from "./router/homepage.router.js";
import messageRouter from "./router/message.router.js";
import userRouter from "./router/user.router.js";
import { app, server } from "./socket/socket.js";

// common
const PORT = process.env.PORT || 5000;
dotenv.config(); // connect to env file

const __dirname = path.resolve();

// format json from request incoming
app.use(express.json());

// parse cookie
app.use(cookieParser());

// home page
// app.use("/", homePageRouter);

// auth API
app.use("/api/auth", authRouter);
// message API
app.use("/api/message", messageRouter);

// show another User API
app.use("/api/users", userRouter);

app.use(express.static(path.join(__dirname, "/front-end/dist")));

app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, "front-end", "dist", "index.html"));
});
server.listen(PORT, () => {
    console.log(`Server Running port http://localhost:${PORT}`);
    connectToMongoDB();
});

