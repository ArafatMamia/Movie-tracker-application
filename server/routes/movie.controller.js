const movies = require("../models/movies.schema");

function addMovie(req, res) {
  console.log("req body", req.body);
  const movieDetail = req.body;
  console.log("movies detail", movieDetail);

  movies.create(movieDetail, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
      console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
}
function getMovie(req, res) {
  movies.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}
function updateMovie(req, res) {
  const movieDetail = req.body;

  movies.updateOne(movieDetail, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
      console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
}
function deleteMovie(req, res) {
  console.log(req.body);
  // movies.delete({ _id: req.body.id }, (err) => {
  //   if (err) {
  //     res.status(500).send(err.message);
  //     console.log(err);
  //   }
  // });
}
module.exports = {
  addMovie,
  getMovie,
  updateMovie,
  deleteMovie,
};
