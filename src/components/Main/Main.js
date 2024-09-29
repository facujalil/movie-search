import React, { useState } from "react";
import style from "./Main.module.css";
import Modal from "./Modal/Modal";
import MovieList from "./MovieList/MovieList";
import Pagination from "./Pagination/Pagination";

function Main({ movieList, pagination, setPagination }) {
  const [movieDetail, setMovieDetail] = useState(null);

  return (
    <main className={style.main}>
      <Modal movieDetail={movieDetail} setMovieDetail={setMovieDetail} />

      <MovieList movieList={movieList} setMovieDetail={setMovieDetail} />

      <Pagination
        movieList={movieList}
        pagination={pagination}
        setPagination={setPagination}
      />
    </main>
  );
}

export default Main;
