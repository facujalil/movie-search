import React from "react";
import style from "./MovieDetail.module.css";
import Poster from "../../../common/Poster/Poster";

function MovieDetail({ movieDetail, closeModal }) {
  return (
    <div className={style.movieDetail} onClick={(e) => e.stopPropagation()}>
      <button onClick={() => closeModal()}>
        <i className="material-symbols-outlined">close</i>
      </button>
      <h3 className={style.movieDetailTitle}>{movieDetail.original_title}</h3>
      <div className={style.movieDetailContent}>
        <Poster view="detail" movie={movieDetail} poster={movieDetail.poster} />
        {movieDetail.release_date ? (
          <p className={style.movieDetailDate}>{movieDetail.release_date}</p>
        ) : (
          <p className={style.movieDetailDate}>No date available</p>
        )}
        {movieDetail.overview ? (
          <p className={style.movieDetailOverview}>{movieDetail.overview}</p>
        ) : (
          <p className={style.movieDetailOverview}>No overview available</p>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
