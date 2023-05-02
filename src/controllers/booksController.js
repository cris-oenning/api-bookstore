import NotFound from "../errors/NotFound.js";
import { authors, books } from "../models/index.js";

class BookController {

  static listBooks = async (req, res, next) => {
    try {
      const searchBooks = books.find();

      req.result = searchBooks;

      next();
    } catch (error) {
      next(error);
    }
  };

  static listBookById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const bookResult = await books.findById(id)
        .populate("author", "name")
        .exec();

      if (bookResult !== null) {
        res.status(200).send(bookResult);
      } else {
        next(new NotFound("Book id not found."));
      }
    } catch (error) {
      next(error);
    }
  };

  static registerBook = async (req, res, next) => {
    try {
      let book = new books(req.body);

      const bookResult = await book.save();

      res.status(201).send(bookResult.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static updateBook = async (req, res, next) => {
    try {
      const id = req.params.id;
    
      const bookResult = await books.findByIdAndUpdate(id, {$set: req.body});

      if (bookResult !== null) {
        res.status(200).send({message: "Successfully updated book."});
      } else {
        next(new NotFound("Book id not found."));
      }
    } catch (error) {
      next(error);
    }
  };

  static deleteBook = async (req, res, next) => {
    try {
      const id = req.params.id;

      const bookResult = await books.findByIdAndDelete(id);

      if (bookResult !== null) {
        res.status(200).send({message: "Book removed successfully."});
      } else {
        next(new NotFound("Book id not found."));
      }
    } catch (error) {
      next(error);
    }
  };

  static listBookByFilter = async (req, res, next) => {
    try {
      const search = await processesSearch(req.query);

      if (search !== null) {
        const booksResult = books
          .find(search)
          .populate("author");

        req.result = booksResult;

        next();
      } else {
        res.status(200).send([]);
      }
    } catch (error) {
      next(error);
    }
  };
}

async function processesSearch(parameters) {
  const { company, title, minPages, maxPages, nameAuthor } = parameters;

  let search = {};

  if (company) search.company = company;
  if (title) search.title = { $regex: title, $options: "i" };

  if (minPages || maxPages) search.numberPages = {};

  // gte = Greater Than or Equal
  if (minPages) search.numberPages.$gte = minPages;
  // lte = Less Than or Equal
  if (maxPages) search.numberPages.$lte = maxPages;

  if (nameAuthor) {
    const author = await authors.findOne({ name: nameAuthor });

    if (author !== null) {
      search.author = author._id;
    } else {
      search = null;
    }
  }

  return search;
}

export default BookController;