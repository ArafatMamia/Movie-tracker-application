import React, { useEffect } from "react";
import axios from "../axiosInstance";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import moment from "moment";
import "./Movie.css";

function Movie({ id, title, watchdate, image, rating, genre }) {
  const [{ basket }, dispatch] = useStateValue();


  
  const deleteMovie = (e) => {
    e.preventDefault();
    axios
      .post('/movie/delete', { id: id })
      .then(() => {
        console.log("successful");
      })
      .catch((error) => alert(error.message));
      console.log('id', id);
  }
const updateMovie = (e) => {
  
    //dispatch the item into data layer

    dispatch({
      type: "CURRENT ID",
      item: {
        id: id,
        
      },
    });
    console.log('basket', basket);
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
          <button className="movie_option update" onClick={updateMovie}>Update</button>
        </Link>
        <button className="movie_option" onClick={deleteMovie} >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Movie;
