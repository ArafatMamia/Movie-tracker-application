//const movies = require("../models/movies.models");
const movies = require("../models/movies.schema");

function addMovie(req, res) {
  const moviesDetail = req.body;
  console.log("movies detail", moviesDetail);
  movies.create(moviesDetail, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
      console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
}
function getMovie(req, res) {
  //   Products.find((err, data) => {
  //     if (err) {
  //       res.status(500).send(err);
  //     } else {
  //       res.status(200).send(data);
  //     }

  //});
  res.send(movies);
}
function updateMovie(req, res) {
  const movieDetail = req.body;
  // Products.create(productDetail, (err, data) => {
  //   if (err) {
  //     res.status(500).send(err.message);
  //     console.log(err);
  //   } else {
  //     res.status(201).send(data);
  //   }
  // });
}
function deleteMovie(req, res) {
  const movieDetail = req.body;

  console.log(movieDetail);
  res.send("movies added");
  // Products.create(productDetail, (err, data) => {
  //   if (err) {
  //     res.status(500).send(err.message);
  //     console.log(err);
  //   } else {
  //     res.status(201).send(data);
  //   }
  // });
}
module.exports = {
  addMovie,
  getMovie,
  updateMovie,
  deleteMovie,
};
