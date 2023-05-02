import RequestIncorrect from "./RequestIncorrect.js";

class ErrorValidation extends RequestIncorrect {
  constructor(error) {
    const messagesError = Object.values(error.errors)
      .map(error => error.message)
      .join("; ");

    super(`The following errors were found: ${messagesError}`);
  }
}

export default ErrorValidation;