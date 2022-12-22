import axios from "../axiosInstance";
import React, { useState } from "react";
import "./UpdateMovie.css";
function UpdateMovie({ id }) {
  console.log("idupdate", id);
  const [title, setTitle] = useState("");
  const [watchDate, setWatchDate] = useState("");
  const [rating, setRating] = useState(0);

  const updateMovie = (e) => {
    e.preventDefault();

    axios
      .post("/movie/update/id", { title, watchDate, rating })
      .then(() => {
        setTitle("");
        setWatchDate("");
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
            />
          </div>
          <div className="container__inputContainer">
            <p>Watchdate</p>
            <input
              type="date"
              onChange={(e) => setWatchDate(e.target.value)}
              value={watchDate}
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
            />
          </div>

          <button onClick={updateMovie}>update Movie</button>
        </div>
      </div>
    </div>
  );
}
export default UpdateMovie;
