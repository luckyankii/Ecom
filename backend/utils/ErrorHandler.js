class Errorhandler extends Error {
  constructor(message, statuscode) {
    super(message); // Call the parent class constructor (Error) with the provided error message

    this.statuscode = statuscode; // Set the `statuscode` property of the custom error object

    Error.captureStackTrace(this, this.constructor); // Capture the stack trace of the error
  }
}

module.exports = Errorhandler; 
