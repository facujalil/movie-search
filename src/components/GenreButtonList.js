import React from "react";
import "../css/GenreButtonList.css";
import GenreButton from "./GenreButton";

function GenreButtonList({ genreId, setGenreId, setPage }) {
  const genres = [
    {
      name: "Action",
      id: 28,
    },
    {
      name: "Animation",
      id: 16,
    },
    {
      name: "Comedy",
      id: 35,
    },
    {
      name: "Drama",
      id: 18,
    },
    {
      name: "Fantasy",
      id: 14,
    },
    {
      name: "Horror",
      id: 27,
    },
    {
      name: "Mistery",
      id: 9648,
    },
    {
      name: "Romance",
      id: 10749,
    },
    {
      name: "Science Fiction",
      id: 878,
    },
    {
      name: "Thriller",
      id: 53,
    },
  ];

  return (
    <ul className="genre-button-list">
      {genres.map((genre) => (
        <li key={genre.id}>
          <GenreButton
            genre={genre}
            genreId={genreId}
            setGenreId={setGenreId}
            setPage={setPage}
          />
        </li>
      ))}
    </ul>
  );
}

export default GenreButtonList;
