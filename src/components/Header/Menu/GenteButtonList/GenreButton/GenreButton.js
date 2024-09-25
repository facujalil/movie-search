import React from "react";
import style from "./GenreButton.module.css";

function GenreButton({ genre, genreId, setGenreId, setPage }) {
  return (
    <button
      className={`${style.genreButton} ${
        genre.id === genreId ? style.selected : null
      }`}
      onClick={() => {
        setGenreId(genre.id);
        setPage(1);
      }}
    >
      {genre.name}
    </button>
  );
}

export default GenreButton;
