import express from "express";
import http from 'http';
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000'],
        methods: ["GET", "POST"]
    },
});

const userSocketMap = {}; //{userId: socket.id}

export const getReceiverSocketId = (receiverId)=>{
    return userSocketMap[receiverId];
}

io.on('connection', (socket) => {
    console.log('a user connected: ', socket.id);

    const userId = socket.handshake.query.userId;

    if(userId != "undefined"){
        userSocketMap[userId] = socket.id;
    }
    
    // io.emit to send events to all the connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    console.log(userSocketMap)
    // socket.on to listen all events, the both clients and server
    socket.on('disconnect', () => {
        console.log('user disconnected: ', socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });

    // socket.on('chat message', (msg) => {
    //     console.log(`message from ${msg.username}: ${msg.text}`);
    //     io.emit('chat message', msg);
    // });
});
export { app, io, server };

