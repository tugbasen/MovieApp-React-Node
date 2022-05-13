import React, { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000`
      )
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="">
        <div className="movie-container">
          {movies &&
            movies.map((movie) => <MovieCard movies={movie} key={movie.movieId} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
