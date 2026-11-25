// Bring in Express
import express from "express";

// Import our Book model
import Book from "../models/Book.js";

// Create our Express Router
const router = express.Router();

// POST - Create a new book
router.post("/", async (req, res) => {
    try {
        const newBook = await Book.create(req.body);

        res.status(201).json(newBook);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});

// GET - Retrieve all books
router.get("/", async (req, res) => {
    try {
        const books = await Book.find({});

        res.status(200).json(books);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});

// Make our router available
export default router;
