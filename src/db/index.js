import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try{
        console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected: ${connection.connection.host}`);
    }
    catch(error){
        console.log("MONGODB CONNECTION ERROR: ", error);
        process.exit(1);
    }
}

export default connectDB;