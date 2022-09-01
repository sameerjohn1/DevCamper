const express = require("express");
const dotenv = require("dotenv");
const bootcamps = require("./Routes/Bootcamp");
const logger = require("./Middleware/logger");
const connectDB = require("./config/db");
const colors = require("colors");

// load env var

dotenv.config({ path: "./config/config.env" });
const app = express();
app.use(express.json());
// middleware function(logger)
app.use(logger);
// bootcamps route
app.use("/api/v1/bootcamps", bootcamps);

// db connect
connectDB();

// define PORT
const PORT = process.env.PORT || 6000;

// running port
const server = app.listen(PORT, () => {
  console.log(
    `server is running ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});

// handle unhandle promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:${err.message}`.red);

  // close erver & exit process
  server.close(() => process.exit(1));
});
