import mongoose from "mongoose";
import isEmail from 'validator/lib/isEmail.js';

const userSchema = new mongoose.Schema(
    {
        fullName:{
            type: String,
            required : true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            validate: [isEmail, 'invalid email']
        },
        password:{
            type: String,
            required: true,
            minlength: 6
        },
        gender:{
            type: String,
            required: true,
            enum: ["male", "female"]
        },
        profilePic:{
            type: String,
            default: ""
        }
    }
, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;
