import { Console } from "console";
import mongoose from "mongoose";

const dbConnect= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL!);
        console.log('CONNECTED TO MONGO SUCCESS...');
    } catch (error) {
        console.log('CONNECTED TO MONGO FAILED...');
        process.exit(1);
    }
};

export default dbConnect;