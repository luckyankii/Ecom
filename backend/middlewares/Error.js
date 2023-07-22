const Errorhandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong MongoDB ID error

  if (err.name === "CastError") {
    const message = `Resource not found with this ID. Invalid ${err.path}`;
    err = new Errorhandler(message, 400);
  }

  // Duplicate key error

  if (err.code === 11000) {
    const message = `Duplicate key '${Object.keys(err.keyValue)}' entered`;
    err = new Errorhandler(message, 400);
  }

  // Wrong JWT error

  if (err.name === "JsonWebTokenError") {
    const message = `Invalid token. Please try again later.`;
    err = new Errorhandler(message, 400);
  }

  // JWT expired error

  if (err.name === "TokenExpiredError") {
    const message = `Token has expired. Please log in again.`;
    err = new Errorhandler(message, 401);
  }

  try {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  } catch (e) {
    console.error(e);
  }

  // Pass the error to the next middleware
  next(err);
};

/* 
CastError - This error is thrown when a MongoDB document cannot be cast to the expected type.

11000 - This error code is returned by MongoDB when a duplicate key is inserted into a collection.
*/
