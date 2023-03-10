const movies = require("../models/movies.schema");
ObjectId = require('mongoose').ObjectID;
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
console.log('update moveis', movieDetail);
  movies.updateOne(movieDetail, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
      console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
}
async function deleteMovie(req, res) {
  console.log('delete movies', req.body);
  const idValue = req.body.id
  const result = await movies.deleteOne({ _id: (idValue)})
  if(result.deletedCount === 1){
     res.status(201).send('deleted')
  }
  else{
    res.status(500).send(err.message);
    console.log(err);
  }
  //  (data,err) => {
  //   if (err) {
  //     res.status(500).send(err.message);
  //     console.log(err);
  //   }else {
  //     res.status(201).send(data);
  //     console.log(deleted);
  //   }
  // });
}
module.exports = {
  addMovie,
  getMovie,
  updateMovie,
  deleteMovie,
};
