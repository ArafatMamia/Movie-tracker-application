import React from "react";
import axios from "../axiosInstance";
import { Link } from "react-router-dom";
import moment from "moment";
import "./Movie.css";

function Movie({ id, title, watchdate, image, rating, genre }) {
  const deleteMovie = (e) => {
    e.preventDefault();

    axios
      .delete(`/movie/delete/${id}`, { id: id })
      .then(() => {
        console.log("seccesful");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="movie">
      <div className="movie__info">
        <p className="title">{title}</p>
        <p className="movie__watchdate">
          <small>
            <p>{moment(watchdate).format("MMMM Do YYYY")}</p>
            <p>{genre}</p>
          </small>
        </p>
        <div className="movie__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      {image ? (
        <img src={image} alt="" />
      ) : (
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-d0e59ddca32a3a9b86c1a0f707cfb30a-lq"
          alt=""
        />
      )}
      <div className="movie__button">
        <Link to="/updateMovie">
          <button className="movie_option update">Update</button>
        </Link>
        <button className="movie_option" onClick={deleteMovie}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Movie;
