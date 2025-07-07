
import mongoose from "mongoose"; 

const {DATABASE_URL} = process.env;

const connectDatabase = async () => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Successfully connect database");        
    } catch (error) {
        console.log("Error connect database");
        console.log(error);
        throw error
    }
}

export default connectDatabase;