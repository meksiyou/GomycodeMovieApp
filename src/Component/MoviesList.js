import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ movies, search }) => {
  return (
    <div className="list">
      {movies
        .filter((movie) =>
          movie.name.toLowerCase().includes(search.toLowerCase().trim())
        )

        .map((movie, i) => (
          <MoviesCard key={i} movie={movie} />
        ))}
    </div>
  );
};

export default MoviesList;
