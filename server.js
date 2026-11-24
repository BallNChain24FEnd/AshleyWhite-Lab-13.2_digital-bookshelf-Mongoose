// Configure our environment variables
import 'dotenv/config';

// Bring in Express
import express from 'express';

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

// Start our Express server
app.listen(port, () => console.log('Server running on port: ' + port));
