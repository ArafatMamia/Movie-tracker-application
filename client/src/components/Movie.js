import React from "react";
import moment from "moment";
import "./Movie.css";

function Movie({ id, title, watchdate, image, rating,genre}) {
  return (
    <div className="movie">
      <div className="movie__info">
        <p className="title">{title}</p>
        <p className="movie__watchdate">
          <small>
            <p>{moment.unix(watchdate).format("MMMM Do YYYY, h:mma")}</p>
            <p>{genre}</p>
          </small>
        </p>
        <div className="movie__rating">
          {" "}
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
        <button className="movie_option">Update</button>
        <button className="movie_option">Delete</button>
      </div>

    </div>
  );
}

export default Movie;
