import React, { useContext } from "react";
import style from "./MovieList.module.css";
import { MoviesContext } from "context/MoviesContext";
import MovieCard from "./MovieCard/MovieCard";

function MovieList({ setMovieDetail }) {
  const { movieList } = useContext(MoviesContext);

  return (
    <div className={style.movieList}>
      {movieList.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          setMovieDetail={setMovieDetail}
        />
      ))}
    </div>
  );
}

export default MovieList;
