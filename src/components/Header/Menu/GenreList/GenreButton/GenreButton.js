import React from "react";
import style from "./GenreButton.module.css";

function GenreButton({ genre, genreId, setGenreId, setPagination }) {
  return (
    <button
      className={`${style.genreButton} ${
        genre.id === genreId ? style.selected : undefined
      }`}
      onClick={() => {
        setGenreId(genre.id);
        setPagination({ currentPage: 1, totalPages: null });
      }}
    >
      {genre.name}
    </button>
  );
}

export default GenreButton;
