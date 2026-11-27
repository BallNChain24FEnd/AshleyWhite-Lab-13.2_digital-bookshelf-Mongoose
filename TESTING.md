# Digital Bookshelf API - Testing

## Environments for Testing

- API Client: Postman in Visual Studio Code
- Server: Express.js
- Database: MongoDB Atlas
- ODM: Mongoose
- Port: 3013
- Base URL: http://localhost:3013/api/books

## CRUD Endpoint Testing

| Method | Endpoint | Expected Status | Result |
|---|---|---|---|
| POST | /api/books | 201 Created | Passed |
| GET | /api/books | 200 OK | Passed |
| GET | /api/books/:id | 200 OK | Passed |
| PUT | /api/books/:id | 200 OK | Passed |
| DELETE | /api/books/:id | 200 OK | Passed |

## Schema Validation Testing

| Test | Expected Result | Result |
|---|---|---|
| Missing title and author | 400 Bad Request | Passed |
| Duplicate ISBN | 400 Bad Request | Passed |
| Missing inStock field | Defaults to true | Passed |

## Error Handling Testing

| Test | Expected Result | Result |
|---|---|---|
| Retrieve a nonexistent book | 404 Not Found | Passed |
| Retrieve a deleted book | 404 Not Found | Passed |

## Test Data

- The Color Purple by Alice Walker
- Beloved by Toni Morrison

## Testing Summary

I used Postman in Visual Studio Code to test the five CRUD endpoints throughout the development of the Digital Bookshelf API.

During Commits 4, 5, and 6, I used The Color Purple to test creating, retrieving, updating, and deleting a book.

During Commit 7, I used Beloved to complete the remaining schema validation tests, including required-field validation and unique ISBN enforcement.

The tests verified that the Express routes communicate with MongoDB Atlas through Mongoose and return the expected HTTP status codes.
