import React, { useEffect, useState } from "react";
import style from "./Modal.module.css";
import MovieDetail from "./MovieDetail/MovieDetail";

function Modal({ movieDetail, setMovieDetail }) {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (movieDetail) {
      openModal();
    } else if (modal) {
      closeModal();
    }
  }, [movieDetail]);

  const openModal = () => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.padding = `0 ${scrollbarWidth / 2}px`;
    setModal(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "visible";
    document.body.style.padding = "0";
    setModal(false);
  };

  return modal && movieDetail ? (
    <div className={style.modal} onClick={closeModal}>
      <MovieDetail movieDetail={movieDetail} setMovieDetail={setMovieDetail} />
    </div>
  ) : null;
}

export default Modal;
