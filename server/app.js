const express = require("express");
const cors = require("cors");
const moviesRouter = require("./routes/movie.router");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/movie", moviesRouter);
module.exports = app;
