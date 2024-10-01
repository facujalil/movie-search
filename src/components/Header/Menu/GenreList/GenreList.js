import React from "react";
import style from "./GenreList.module.css";
import GenreButton from "./GenreButton/GenreButton";

function GenreList({ genreId, setGenreId }) {
  const genreList = [
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
    <ul className={style.genreList}>
      {genreList.map((genre) => (
        <li key={genre.id}>
          <GenreButton
            genre={genre}
            genreId={genreId}
            setGenreId={setGenreId}
          />
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
