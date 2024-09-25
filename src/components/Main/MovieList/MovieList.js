import React from "react";
import style from "./MovieList.module.css";
import MovieItem from "./MovieItem/MovieItem";

function MovieList({ movies, setMovieDetail, setModal }) {
  return (
    <div className={style.movieList}>
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
