import React, { useContext } from "react";
import style from "./GenreButton.module.css";
import { MoviesContext } from "context/MoviesContext";

function GenreButton({ genre, genreId, setGenreId }) {
  const { setPagination } = useContext(MoviesContext);

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
