const express = require("express");
const moviesRouter = require("./routes/movie.router");
const app = express();

app.use(express.json());
app.use("/movie", moviesRouter);
module.exports = app;
