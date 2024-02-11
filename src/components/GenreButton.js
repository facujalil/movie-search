import React from "react";
import "../css/GenreButton.css";

function GenreButton({ genre, genreId, setGenreId, setPage }) {
  return (
    <button
      className={
        genre.id === genreId ? "genre-button selected" : "genre-button"
      }
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
