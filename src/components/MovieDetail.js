import React from "react";
import "../css/MovieDetail.css";
import Poster from "./Poster";

function MovieDetail({ movieDetail, closeModal }) {
  return (
    <div className="movie-detail" onClick={(e) => e.stopPropagation()}>
      <button className="close-modal-button" onClick={() => closeModal()}>
        <i className="material-symbols-outlined">close</i>
      </button>
      <h3 className="movie-detail-title">{movieDetail.original_title}</h3>
      <div className="movie-detail-content">
        <Poster movie={movieDetail} poster={movieDetail.poster} />
        {movieDetail.release_date ? (
          <p className="movie-detail-date">{movieDetail.release_date}</p>
        ) : (
          <p className="movie-detail-date">No date available</p>
        )}
        {movieDetail.overview ? (
          <p className="movie-detail-overview">{movieDetail.overview}</p>
        ) : (
          <p className="movie-detail-overview">No overview available</p>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
