import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB= async() =>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.error(`MongoDB Connection Faield : ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;