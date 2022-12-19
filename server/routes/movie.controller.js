const movies = require("../models/movies.models");
const views = require("../view/index");
function addMovie(req, res) {
  if (req.body.Genre === "action") {
    const movieDetail = req.body;
    console.log(movieDetail);
    movies.action.push(movieDetail);
    views();
  } else if (req.body.Genre === "horror") {
    const movieDetail = req.body;
    console.log(movieDetail);
    movies.horror.push(movieDetail);
    views();
  }
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
  const index = req.parms.index;
  console.log("index", index);
  movies[index] = req.body;
  console.log("update", movieDetail);
  res.send(movieDetail);
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
