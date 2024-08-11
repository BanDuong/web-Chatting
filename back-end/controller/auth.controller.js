import bcrypt from "bcryptjs/dist/bcrypt.js";
import User from "../model/user.model.js";
import generalTokenAndSetCookie from "../utils/generalToken/jwtToken.js";

export const loginUser = (req, res) =>{
    res.send("Login!");
}

export const logoutUser = (req, res) =>{
    res.send("Logout!");
}

export const signupUser = async (req, res) =>{
    try{
        let {fullName, username, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error: "Password don't match"});
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error: "Username already exists"});
        }

        // web avarta API online
        // https://avatar-placeholder.iran.liara.run/document
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

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
            username,
            password,
            gender,
            profilePic: gender === "male"? boyProfilePic : girlProfilePic
        });
        if(newUser){
            await newUser.save();
            
            // Gen JWT Token
            await generalTokenAndSetCookie(newUser.id, res);

            res.status(201).json({
                id: newUser.id,
                fullName: newUser.fullName,
                username: newUser.username,
                password: newUser.password,
                gender: newUser.gender,
                profilePic: newUser.profilePic
            });
        }else{
            res.status(400).json({error: "Failed to create user!"});
        }
    }catch (e){
        console.log(e.message);
        res.status(500).json({error: "Internal Server Error!"});
    }
}