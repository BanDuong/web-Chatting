import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) =>{
    try{
        const {message} = req.body;
        const receiverId = req.params.userId; //User ID receive message (on URL)
        const senderId = req.user.id; // User ID send message

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}, // $ is syntaxt of Mongo
        });

        if(!conversation){
            // conversation = new Conversation({participants: [senderId, receiverId]});
            // await conversation.save();
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage){
            conversation.messages.push(newMessage.id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId = getReceiverSocketId(receiverId);

        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }
        

        res.status(201).json(newMessage);
    }catch(e){
        console.error(e.message);
        return res.status(500).json({error: "Server error"});
    }
};

export const getMessage = async (req, res) =>{
    try{
        const OwnId = req.user.id;
        const userSendToMeId = req.params.userId;

        const conversation = await Conversation.findOne({
            participants: {$all: [OwnId, userSendToMeId]}
        }).populate("messages");

        if(!conversation){
            return res.status(200).json({});
        }
        return res.status(200).json(conversation.messages);
    }catch(e){
        console.error("Error in getMessage controller: ", e.message);
        return res.status(500).json({error: "Server error"});
    }
};