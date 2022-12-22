import axios from "../axiosInstance";
import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import "./UpdateMovie.css";
function UpdateMovie() {
  const [{ basket }, dispatch] = useStateValue();
  const [title, setTitle] = useState("");
  const [watchDate, setWatchDate] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(0);

  const updateMovie = (e) => {
    e.preventDefault();
   console.log('basket',basket);
    axios
      .post("/movie/update", { id: basket.id,title, genre, watchDate, rating })
      .then(() => {
        setTitle("");
        setWatchDate("");
        setGenre("")
        setRating(0);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="updatemovie">
      <div className="updatemovie__container">
        <div className="container__formContainer">
          <h3>Update Movie</h3>

          <div className="container__inputContainer">
            <p>Title</p>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>
          <div className="container__inputContainer">
            <p>Genre</p>
            <input
              type="text"
              onChange={(e) => setGenre(e.target.value)}
              value={genre}
              required
            />
            </div>
          <div className="container__inputContainer">
            <p>Watchdate</p>
            <input
              type="date"
              onChange={(e) => setWatchDate(e.target.value)}
              value={watchDate}
              required
            />
          </div>
          <div className="container__inputContainer">
            <p>Rating</p>
            <input
              type="number"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
              max={5}
              min={1}
              required
            />
          </div>

          <button onClick={updateMovie}>update Movie</button>
        </div>
      </div>
    </div>
  );
}
export default UpdateMovie;
