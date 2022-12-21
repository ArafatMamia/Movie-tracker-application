const mongoose = require("mongoose");
const { movies } = require("../models/movies.schema");
//mongodb: y4C-38ikhkv9DeK
//username: arafat
const URL =
  "mongodb+srv://arafat:y4C-38ikhkv9DeK@cluster0.1a5mehw.mongodb.net/?retryWrites=true&w=majority";
const client = mongoose.connect(
  URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("moongose connected");
  }
);
client.connect()
    .then(() => {
        console.log('start');
    })
    .catch(err => {
        console.error('App starting error:', err.stack);
        process.exit(1)
    });
