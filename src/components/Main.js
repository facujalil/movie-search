import React, { useState } from "react";
import "../css/Main.css";
import Modal from "./Modal";
import MovieList from "./MovieList";
import Pagination from "./Pagination";

function Main({ movies, topic, error, page, setPage }) {
  const [movieDetail, setMovieDetail] = useState([]);
  const [modal, setModal] = useState(false);

  return (
    <main>
      {modal && <Modal movieDetail={movieDetail} setModal={setModal} />}

      <MovieList
        movies={movies}
        setMovieDetail={setMovieDetail}
        setModal={setModal}
      />

      <Pagination topic={topic} error={error} page={page} setPage={setPage} />
    </main>
  );
}

export default Main;
