import dotenv from "dotenv";
import express from "express";
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRouter from "./router/auth.router.js";
import homePageRouter from "./router/homepage.router.js";

// common
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config(); // connect to env file

// format json from request incoming
app.use(express.json());

// home page
app.use("/", homePageRouter);

// auth API
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
    console.log(`Server Running port http://localhost:${PORT}`);
    connectToMongoDB();
});

