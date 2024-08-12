import jsonwebtoken from "jsonwebtoken";
// import jwt from 'jsonwebtoken'

const generalTokenAndSetCookie = (userId, res) =>{
    const jwtToken = jsonwebtoken.sign({userId}, process.env.JWT_SECRET, { expiresIn: '15d' });
    res.cookie("jwt", jwtToken, {
        httpOnly: true, // prevent XSS attack
        sameSite: "strict", // prevent CSRF attack
        secure: process.env.NODE_ENV !== "development",
        maxAge: 15 * 24 * 60 * 60 * 1000 // D/H/M/S/miniS
    });
}

export default generalTokenAndSetCookie;
