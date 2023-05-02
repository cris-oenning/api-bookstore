import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    id: {type: String},
    title: {
      type: String,
      required: [true, "Book title is required."]
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authors",
      required: [true, "Author is required."]
    },
    company: {
      type: String,
      required: [true, "Publisher is required."],
      enum: {
        values: ["Code House", "Company x"],
        message: "The publisher {VALUE} is not an allowed value."
      }
    },
    numberPages: {
      type: Number,
      validate: {
        validator: (value) => {
          return value >= 10 && value <= 5000;
        },
        message: "The number of pages must be between 10 and 5000. Value provided: {VALUE}"
      }
    }
  }
);

const books= mongoose.model("books", bookSchema);

export default books;