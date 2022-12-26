import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axiosInstance";
import "./Home.css";
import Movie from "./Movie";

function Home() {
  const [movies, setMovies] = useState("");
  const [favorite, setFavorite] = useState([""]);

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/movie/get");
      console.log("data", data);
      setMovies(data);
    };
    fetchdata();
  }, [movies]);

  useEffect(() => {
    const ratingList = movies && movies.data.map(({ rating }) => rating);
  console.log(ratingList);
  const maxRating = Math.max(...ratingList);
  for (const property in movies.data) {
    if (movies.data[property]['rating'] === maxRating){
      setFavorite([movies.data[property]['genre']])
      
    }
    
  }
  }, [movies]);
  

  return (
    <div className="home">
      <div className="home__row">
        {movies &&
          movies.data.map((movie) => (
            <Movie
              id={movie._id}
              title={movie.title}
              watchdate={movie.watchDate}
              image={movie.imageURL}
              rating={movie.rating}
              genre={movie.genre}
            />
          ))}
      </div>
      <div className="home__info">
        <h2>Favorite genre: {favorite}</h2>
        <h2>Average number of movies watched per month.</h2>
        <h2>Current mood</h2>
      </div>
      <Link to="/addMovie">
        <div className="home_add">
          <button>Add Movie</button>
        </div>
      </Link>
    </div>
  );
}

export default Home;
