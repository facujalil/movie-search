import React from "react";
import style from "./MovieCard.module.css";
import Poster from "../../../common/Poster/Poster";

function MovieCard({ movie, setMovieDetail }) {
  const getMovieById = async (movieId) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=e33ba4ffa1811d3cdbfe3c3bb59332ad`
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.status_message || "Something went wrong.");
      }

      const data = await res.json();
      setMovieDetail(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.movieCard} onClick={() => getMovieById(movie.id)}>
      <Poster view="card" movie={movie} />
      <h4>{movie.original_title}</h4>
    </div>
  );
}

export default MovieCard;