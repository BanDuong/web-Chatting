import jsonwebtoken from "jsonwebtoken";
import User from "../model/user.model.js";

const protectRouter = async (req, res, next) =>{
    try{
        const tokenJWT = req.cookies.jwt;
        if(!tokenJWT){
            return res.status(401).json({error: "No Token Provided"});
        }

        const payload = jsonwebtoken.verify(tokenJWT, process.env.JWT_SECRET);
        if(!payload){
            return res.status(401).json({error: "Not authorized, token is invalid"});
        }

        const user = await User.findById(payload.userId).select("-password");
        if(!user){
            return res.status(401).json({error: "User not found"});
        }
        
        req.user = user;
        next();
    }catch(e){
        console.error("Error ProtectRouter in Middleware", e.message);
        return res.status(500).json({error: "Not authorized, token is required"});
    }
};

export default protectRouter;
