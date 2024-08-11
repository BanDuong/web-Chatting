import mongoose from "mongoose";

const connectToMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connect MongoDB success!")
    }catch(e){
        console.log("Error connecting to MongoDB", e.message);
    }
}

export default connectToMongoDB;
