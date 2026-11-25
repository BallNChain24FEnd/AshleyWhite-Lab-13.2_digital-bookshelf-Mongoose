// Bring in Mongoose
import mongoose from 'mongoose';

// Establish a connection to our database
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB!');
    } catch (e) {
        console.log('MongoDB connection failed:', e.message);
        process.exit(1);
    }
}

// Make our connection function available
export default connectDB;