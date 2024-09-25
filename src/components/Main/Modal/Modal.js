import React from "react";
import style from "./Modal.module.css";
import MovieDetail from "./MovieDetail/MovieDetail";

function Modal({ movieDetail, setModal }) {
  const closeModal = () => {
    document.body.style.overflow = "visible";
    document.body.style.padding = "0";

    setModal(false);
  };

  return (
    <div className={style.modal} onClick={closeModal}>
      <MovieDetail movieDetail={movieDetail} closeModal={closeModal} />
    </div>
  );
}

export default Modal;
