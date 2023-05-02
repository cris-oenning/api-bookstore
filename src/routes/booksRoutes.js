import express from "express";
import BookController from "../controllers/booksController.js";
import page from "../middlewares/page.js";

const router = express.Router();

router
  .get("/books", BookController.listBooks, page)
  .get("/books/search", BookController.listBookByFilter, page)
  .get("/books/:id", BookController.listBookById)
  .post("/books", BookController.registerBook)
  .put("/books/:id", BookController.updateBook)
  .delete("/books/:id", BookController.deleteBook);

export default router;   