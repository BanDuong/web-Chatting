import User from "../model/user.model.js";
// import generalTokenAndSetCookie from "../utils/generalToken/jwtToken.js";

export const getUserForSidebar = async (req, res) =>{
    try{
        const OwnId = req.user.id;
        const filteredUsers = await User.find({_id: {$ne: OwnId}}).select("-password"); // ne = not equal
        
        return res.status(200).json(filteredUsers);
    }catch(e){
        console.error("Error in User Controller", e.message);
        return res.status(500).json({error: "Server error"});
    }
};
