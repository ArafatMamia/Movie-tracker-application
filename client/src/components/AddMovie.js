import axios from "../axiosInstance";
import React, { useState } from "react";
import "./AddMovie.css";
function AddMovie() {
  const [title, setTitle] = useState("");
  const [watchDate, setWatchDate] = useState("");
  const [rating, setRating] = useState(0);

  const addMovie = (e) => {
    e.preventDefault();

    axios
      .post("/movie/add", { title, watchDate, rating })
      .then(() => {
        setTitle("");
        setWatchDate("");
        setRating(0);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="addProduct">
      <div className="addProduct__container">
        <div className="container__formContainer">
          <h3>Add Movie</h3>

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

          <button onClick={addMovie}>Add Movie</button>
        </div>
      </div>
    </div>
  );
}
export default AddMovie;
