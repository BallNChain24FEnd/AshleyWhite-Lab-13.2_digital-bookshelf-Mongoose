 // Bring in Mongoose
import mongoose from "mongoose";

// Extract the Schema class
import { Schema } from "mongoose";

// Define the structure of our book documents
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        unique: true
    },
    publishedDate: {
        type: Date
    },
    inStock: {
        type: Boolean,
        default: true
    }
});

// Generate the Book model
const Book = mongoose.model("Book", bookSchema);

// Make the model available throughout our application
export default Book;
