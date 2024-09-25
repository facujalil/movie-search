import React from "react";
import style from "./Results.module.css";

function Results({
  genreId,
  movies,
  setSearchedMovie,
  topic,
  error,
  getMoviesByGenre,
}) {
  return (
    <div className={style.results}>
      <button>
        <i
          className="material-symbols-outlined"
          onClick={() => {
            setSearchedMovie("");
            getMoviesByGenre(genreId);
          }}
        >
          arrow_back
        </i>
      </button>
      <h2>{movies.length > 0 ? topic : error}</h2>
    </div>
  );
}

export default Results;
