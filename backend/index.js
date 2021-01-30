const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// App Setup
const app = express();
app.use(cors());
dotenv.config();
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });
app.use(express.json());

// ROUTES HERE
//
//
//

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
