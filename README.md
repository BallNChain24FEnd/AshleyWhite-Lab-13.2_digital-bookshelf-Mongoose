# Lab 13.2 - Digital Bookshelf API

## Project Description

The Digital Bookshelf API is a RESTful API designed for a local library to manage its collection of books. This project demonstrates how to use Express.js, MongoDB Atlas, and Mongoose to create, retrieve, update, and delete documents in a database.

## Features

- Create new books
- Retrieve all books
- Retrieve a specific book by ID
- Update existing books
- Delete books
- Required-field validation
- Unique ISBN enforcement
- Default book availability status
- Asynchronous database operations
- Error handling with HTTP status codes
- Secure database connection using environment variables
- Modular project structure

## Technologies Used

- JavaScript
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Postman
- Visual Studio Code
- Git and GitHub

## Installation and Setup

### 1. Clone repository

    git clone https://github.com/BallNChain24FEnd/AshleyWhite-Lab-13.2_digital-bookshelf-Mongoose.git

### 2. Navigate to project directory

    cd AshleyWhite-Lab-13.2_digital-bookshelf-Mongoose

### 3. Install dependencies

    npm install

### 4. Configure MongoDB Atlas

Create a MongoDB Atlas cluster, configure a database user with appropriate permissions, and add your IP address to the network access list.

Create a .env file in the root directory and add your own MongoDB connection string.

    MONGO_URI=your_mongodb_connection_string

The .env file is excluded from GitHub to protect database credentials.

### 5. Start the server

    npm start

Alternatively:

    node server.js

The server runs at:

http://localhost:3013

## Testing

I used Postman in Visual Studio Code to test the API endpoints throughout the development process. The Color Purple by Alice Walker and Beloved by Toni Morrison were used as sample book documents.

Additional testing information is available in [TESTING.md](./TESTING.md).

## Reflection Questions

### 1. Separation of Concerns

Separating the database connection, Mongoose model, Express routes, and server into different files makes the application more organized, readable, and maintainable.

The connection.js file manages the database connection, Book.js defines the structure and validation of book documents, bookRoutes.js handles the CRUD operations, and server.js configures and starts the Express application.

This separation allows developers to update or troubleshoot individual parts of the application without unnecessarily modifying unrelated files. It also makes the application easier to expand as additional models and routes are introduced.

### 2. PUT versus PATCH

PUT is generally used to replace the representation of an existing resource, while PATCH is used to partially update a resource.

Although my application uses the PUT method as required by the assignment, my implementation behaves more like PATCH because findByIdAndUpdate() updates the fields provided in the request body while preserving the remaining fields.

For example, updating the inStock field to false does not change the title, author, ISBN, or publication date.

I also included the new: true option to return the updated document and runValidators: true to apply Mongoose update validation.

### 3. DELETE Response

A successful DELETE request can return a 200 OK status with a confirmation message, a 200 OK status with the deleted document, or a 204 No Content status without a response body.

For this project, I chose to return a 200 OK status with a JSON confirmation message.

    {
        "message": "Book deleted successfully"
    }

This approach provides clear feedback to the client and confirms that the requested operation was successful. If the book does not exist, the application returns a 404 Not Found status.

## Mini Reflection

This lab strengthened my understanding of how Express.js, Mongoose, and MongoDB Atlas work together to create a RESTful API.

One of the most challenging parts of this project was establishing the MongoDB Atlas connection. Troubleshooting network access and database authentication helped me better understand the importance of secure database connections and environment variables.

Completing this project helped me develop a stronger understanding of backend development and how applications communicate with databases.

## Resources

- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [Postman Documentation](https://learning.postman.com/docs/)
- [dotenv Documentation](https://www.npmjs.com/package/dotenv)
