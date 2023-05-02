import express from "express";
import AuthorController from "../controllers/authorsController.js";
import page from "../middlewares/page.js";

const router = express.Router();

router
  .get("/authors", AuthorController.listAuthors, page)
  .get("/authors/:id", AuthorController.listAuthorById)
  .post("/authors", AuthorController.registerAuthor)
  .put("/authors/:id", AuthorController.updateAuthor)
  .delete("/authors/:id", AuthorController.deleteAuthor);

export default router;   