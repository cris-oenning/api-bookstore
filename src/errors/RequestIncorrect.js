import ErrorBase from "./ErrorBase.js";

class RequestIncorrect extends ErrorBase {
  constructor(message = "One or more data provided is incorrect.") {
    super(message, 400);
  }
}

export default RequestIncorrect;