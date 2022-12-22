const express = require("express");
const {
  addMovie,
  getMovie,
  updateMovie,
  deleteMovie,
} = require("./movie.controller");
const moviesRouter = express.Router();

//add movie
moviesRouter.post("/add", addMovie);
//get movie
moviesRouter.get("/get", getMovie);
//update movie
moviesRouter.post("/update", updateMovie);
//delete movie
moviesRouter.post("/delete", deleteMovie);

module.exports = moviesRouter;
