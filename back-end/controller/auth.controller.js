import bcrypt from "bcryptjs/dist/bcrypt.js";
import User from "../model/user.model.js";
import generalTokenAndSetCookie from "../utils/generalToken/jwtToken.js";

export const loginUser = async (req, res) =>{
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email});//.select("+password");
        if(!user){
            return res.status(400).json({error: "Not email"});
        }
        const isMatchPassword = await bcrypt.compare(password, user.password);

        if(!isMatchPassword){
            return res.status(400).json({error: "Invalid Credentials (password incorrect)"});
        }

        generalTokenAndSetCookie(user.id, res);
        
        res.status(200).json({
            message: "Login Success",
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                gender: user.gender,
                profilePic: user.profilePic
            }
        });
        
    }catch(e){
        console.error(e.message);
        return res.status(500).json({error: "Server error"});
    }
}

export const logoutUser = async (req, res) =>{
    try{
        res.cookie("jwt", "", {
            maxAge: 0
        });
        res.status(200).json({message: "Logout successfully"});
    }catch(e){
        console.error(e.message);
        return res.status(500).json({error: "Server error"});
    }
}

export const signupUser = async (req, res) =>{
    try{
        let {fullName, email, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error: "Password don't match"});
        }

        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({error: "Email already exists"});
        }

        // web avarta API online
        // https://avatar-placeholder.iran.liara.run/document
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${email}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${email}`;

        // HASH password
        const salt = 12; // length hash
        password = await bcrypt.hash(password, salt);

        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, salt);

        // const salt = bcrypt.genSaltSync(10);
        // const hashedPassword = bcrypt.hashSync(password, salt);

        // const hashedPassword = await bcrypt.compare(password, user.password);

        // const hashedPassword = await bcrypt.compareSync(password, user.password);

        // const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});

        const newUser = new User({
            fullName,
            email,
            password,
            gender,
            profilePic: gender === "male"? boyProfilePic : girlProfilePic
        });
        if(newUser){
            await newUser.save();
            
            // Gen JWT Token
            await generalTokenAndSetCookie(newUser.id, res);

            res.status(201).json({
                message: "Create user successful!",
                user:{
                    id: newUser.id,
                    fullName: newUser.fullName,
                    email: newUser.email,
                    password: newUser.password,
                    gender: newUser.gender,
                    profilePic: newUser.profilePic
                }
            });
        }else{
            res.status(400).json({error: "Failed to create user!"});
        }
    }catch (e){
        console.error("Error in auth controller: ", e.message);
        res.status(500).json({error: "Internal Server Error!"});
    }
}