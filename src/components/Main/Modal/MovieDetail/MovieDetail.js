import React from "react";
import style from "./MovieDetail.module.css";
import Poster from "../../../common/Poster/Poster";

function MovieDetail({ movieDetail, setMovieDetail }) {
  return (
    <div className={style.movieDetail} onClick={(e) => e.stopPropagation()}>
      <button onClick={() => setMovieDetail(null)}>
        <i className="material-symbols-outlined">close</i>
      </button>
      <h3>{movieDetail.original_title}</h3>
      <Poster view="detail" movie={movieDetail} />
      <p>
        {movieDetail.release_date
          ? movieDetail.release_date
          : "No date available"}
      </p>
      <p>
        {movieDetail.overview ? movieDetail.overview : "No overview available"}
      </p>
    </div>
  );
}

export default MovieDetail;
