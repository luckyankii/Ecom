const app = require("./app");
const connectDb = require("./db/Database");

/*------------------------- Handle Uncaught Exception ------------------------------- */
process.on("uncaughtException", (err) => {
  console.log("error:", err.message);
  console.log("Shuting Down Server For Uncaught Exception");
});

// config
console.log(process.env.NODE_ENV !== "PRODUCTION");
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./config/.env",
  });
}

// connect DataBase
connectDb();
/*---------------------------------- Create Server ---------------------------------------*/
const server = app.listen(process.env.PORT || 8080, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT || 8080}`
  );
});

/*--------------------- Unhandled Promise Rejection ------------------------------- */

process.on("unhandledRejection", (err) => {
  console.log("error:", err.message);
  console.log("Shuting Down Server For Unhandled promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
