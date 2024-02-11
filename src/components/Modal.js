import React from "react";
import "../css/Modal.css";
import MovieDetail from "./MovieDetail";

function Modal({ movieDetail, setModal }) {
  const closeModal = () => {
    document.body.style.overflow = "visible";
    document.body.style.padding = "0";

    setModal(false);
  };

  return (
    <div className="modal" onClick={closeModal}>
      <MovieDetail movieDetail={movieDetail} closeModal={closeModal} />
    </div>
  );
}

export default Modal;
