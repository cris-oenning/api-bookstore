import mongoose from "mongoose";
import ErrorBase from "../errors/ErrorBase.js";
import ErrorValidation from "../errors/ErrorValidation.js";
import RequestIncorrect from "../errors/RequestIncorrect.js";

// eslint-disable-next-line no-unused-vars
function manipulativeErrors (error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    new RequestIncorrect().sendReply(res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ErrorValidation(error).sendReply(res);
  } else if (error instanceof ErrorBase) {
    error.sendReply(res);
  } else {
    new ErrorBase().sendReply(res);
  }
}

export default manipulativeErrors;