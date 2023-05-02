import NotFound from "../errors/NotFound.js";
import { authors } from "../models/index.js";

class AuthorController {
  static listAuthors = async (req, res, next) => {
    try {
      const authorsResult = authors.find();

      req.result = authorsResult;

      next();
    } catch (error) {
      res.status(500).json({ message: "Internal server error." });
    }
  };

  static listAuthorById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const authorResult = await authors.findById(id);

      if (authorResult !== null) {
        res.status(200).send(authorResult);
      } else {
        next(new NotFound("Author ID not found."));
      }
    } catch (error) {
      next(error);
    }
  };

  static registerAuthor = async (req, res, next) => {
    try {
      let author = new authors(req.body);

      const authorResult = await author.save();

      res.status(201).send(authorResult.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static updateAuthor = async (req, res, next) => {
    try {
      const id = req.params.id;
  
      const authorResult = await authors.findByIdAndUpdate(id, {$set: req.body});

      if (authorResult !== null) {
        res.status(200).send({message: "Author successfully updated."});
      } else {
        next(new NotFound("Author ID not found."));
      }

    } catch (error) {
      next(error);
    }
  };

  static deleteAuthor = async (req, res, next) => {
    try {
      const id = req.params.id;

      const authorResult = await authors.findByIdAndDelete(id);


      if (authorResult !== null) {
        res.status(200).send({message: "Author successfully removed."});
      } else {
        next(new NotFound("Author ID not found."));
      }
    } catch (error) {
      next(error);
    }
  };
}

export default AuthorController;