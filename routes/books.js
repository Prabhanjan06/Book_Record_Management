const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  getAllIssuedBooks,
  addNewBook,
  updateBookById,
} = require("../controllers/book_controller");

const { books } = require("../data/books.json");
const { users } = require("../data/users.json");

const { UserModel, BookModel } = require("../models");

const router = express.Router();

//getting all users
router.get("/", getAllBooks);

//get book by id
router.get("/:id", getSingleBookById);

//getting all issued book
router.get("/issued/by-user", getAllIssuedBooks);

//creating new book
router.post("/", addNewBook);

//updating book
router.put("/:id", updateBookById);

module.exports = router;
