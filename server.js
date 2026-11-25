// Configure our environment variables
import "dotenv/config";

// Bring in Express
import express from "express";

// Import our database connection
import connectDB from "./db/connection.js";

// Import our Book routes
import bookRouter from "./routes/bookRoutes.js";

// Create our Express app
const app = express();

// Apply middleware for JSON request bodies
app.use(express.json());

// Define our port
const port = 3013;

// Test route for our server
app.get("/", (req, res) => {
    res.send("Welcome to the Digital Bookshelf API!");
});

// Mount our Book routes
app.use("/api/books", bookRouter);

// Connect to MongoDB before starting our server
await connectDB();

// Start our Express server
app.listen(port, () => {
    console.log("Server running on port: " + port);
});
