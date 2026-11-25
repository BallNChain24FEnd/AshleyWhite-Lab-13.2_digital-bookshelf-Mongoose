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

// GET - Retrieve a book by ID
router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json(book);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});

// PUT - Update a book by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedBook) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json(updatedBook);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});

// DELETE - Remove a book by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(
            req.params.id
        );

        if (!deletedBook) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json({
            message: "Book deleted successfully"
        });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});

// Make our router available
export default router;
