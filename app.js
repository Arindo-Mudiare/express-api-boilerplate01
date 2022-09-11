require("dotenv").config();
// async errors

const express = require("express");
const app = express();

// middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send(`<h1>Api Home</h1><a href='/api/v1/products'>main page route</a>`);
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

// port
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    app.listen(port, console.log(`Server listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
