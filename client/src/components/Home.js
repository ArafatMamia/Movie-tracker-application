import React, { useEffect, useState } from "react";
import axios from "../axiosInstance";
import "./Home.css";
import Movie from "./Movie";

function Home() {
  const [movies, setMovies] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/movie/get");
      setMovies(data);
    };
    fetchdata();
  }, []);

  return (
    <div className="home">
      <div className="home__row">
        {movies &&
          movies.data.map((movie) => (
            <Movie
              id={movie._id}
              title={movie.title}
              watchdate={movie.date}
              image={movie.imageURL}
              rating={movie.rating}
              genre={movie.genre}
            />
          ))}
      </div>
      <div className="home__info">
        <h2>Favorite genre: </h2>
        <h2>Average number of movies watched per month.</h2>
        <h2>Current mood</h2>
      </div>
      <div className="home_add">
        <button>Add Movie</button>
      </div>
    </div>
  );
}

export default Home;
