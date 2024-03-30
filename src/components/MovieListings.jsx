import data from "../movies.json";
import { useState } from "react";
import MovieListing from "./MovieListing";

const MovieListings = () => {
  const [movies, setMovies] = useState(data);

  return (
    <div className="">
      {movies.map((movie) => (
        <MovieListing
          key={movie.id}
          poster={movie.poster}
          title={movie.title}
          description={movie.plot}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieListings;
