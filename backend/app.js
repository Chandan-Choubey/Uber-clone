const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/new", (req, res) => {
  res.send("Hello, World!");
});

module.exports = app;
