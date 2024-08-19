import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";

export const sendMessage = async (req, res) =>{
    try{
        const {message} = req.body;
        const receiverId = req.params.userId; //User ID receive message (on URL)
        const senderId = req.user.id; // User ID send message

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]} // $ is syntaxt of Mongo
        });

        if(!conversation){
            // conversation = new Conversation({participants: [senderId, receiverId]});
            // await conversation.save();
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if(newMessage){
            await newMessage.save();
            conversation.messages.push(newMessage.id);
            await conversation.save();
            return res.status(201).json(newMessage);
        }
        // res.status(201).json(newMessage);
    }catch(e){
        console.error(e.message);
        return res.status(500).json({error: "Server error"});
    }
};

