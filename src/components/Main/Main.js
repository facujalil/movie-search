import React, { useContext, useState } from "react";
import style from "./Main.module.css";
import Modal from "./Modal/Modal";
import MovieList from "./MovieList/MovieList";
import Pagination from "./Pagination/Pagination";
import { MoviesContext } from "context/MoviesContext";

function Main() {
  const { movieList } = useContext(MoviesContext);

  const [movieDetail, setMovieDetail] = useState(null);

  return (
    <main className={style.main}>
      <Modal movieDetail={movieDetail} setMovieDetail={setMovieDetail} />

      {movieList.length > 0 ? (
        <>
          <MovieList setMovieDetail={setMovieDetail} />
          <Pagination />
        </>
      ) : null}
    </main>
  );
}

export default Main;
