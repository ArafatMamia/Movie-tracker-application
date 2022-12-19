const express = require("express");
const {
  addMovie,
  getMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie.controller");
const moviesRouter = express.Router();

//add movie
moviesRouter.post("/add", addMovie);
//get movie
moviesRouter.get("/get", getMovie);
//update movie
moviesRouter.put("update/:index", updateMovie);
//delete movie
moviesRouter.delete("delete/:index", deleteMovie);

module.exports = moviesRouter;
