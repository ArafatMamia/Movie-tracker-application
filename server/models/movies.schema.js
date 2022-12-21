const mongoose = require("mongoose");

const moviesSchema = mongoose.Schema({
  title: String,
  watchDate: Date,
  rating: Number,
});
module.exports = mongoose.model("movies", moviesSchema);
