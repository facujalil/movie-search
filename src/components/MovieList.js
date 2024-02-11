import React from "react";
import "../css/MovieList.css";
import MovieItem from "./MovieItem";

function MovieList({ movies, setMovieDetail, setModal }) {
  return (
    <div className="movie-list">
      {movies.length > 0 &&
        movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            setMovieDetail={setMovieDetail}
            setModal={setModal}
          />
        ))}
    </div>
  );
}

export default MovieList;
