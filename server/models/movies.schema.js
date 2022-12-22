const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  title: {
    type: String, required: true},
  watchDate: {type: Date, required: true},
  genre: {type: String, required: true},
  rating: {type: Number, required: true},
});
const movies = mongoose.model("movies", moviesSchema);
module.exports = movies;

const URL =
  "mongodb+srv://arafat:y4C-38ikhkv9DeK@cluster0.1a5mehw.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(
  URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("mongodb connected successfully");
  }
);
