import { useState } from "react";
import data from "../movies.json";
import MovieListing from "./MovieListing";

const MovieListings = ({ isHome = true }) => {
  const [movies, setMovies] = useState(data);

  return (
    <div className="">
      {(isHome ? movies.slice(0, 3) : movies).map((movie) => (
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
