import express from "express";

const homePageRouter = express.Router();

homePageRouter.get("", (req, res) => {
    res.send("Wellcome to Homepage");
});

export default homePageRouter;