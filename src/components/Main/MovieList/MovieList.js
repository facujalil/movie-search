import React from "react";
import style from "./MovieList.module.css";
import MovieCard from "./MovieCard/MovieCard";

function MovieList({ movieList, setMovieDetail }) {
  return (
    <div className={style.movieList}>
      {movieList.length > 0
        ? movieList.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              setMovieDetail={setMovieDetail}
            />
          ))
        : null}
    </div>
  );
}

export default MovieList;
