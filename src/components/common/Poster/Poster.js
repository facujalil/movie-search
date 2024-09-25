import React from "react";
import style from "./Poster.module.css";
import noImage from "../../../img/no-image.png";

function Poster({ view, movie, poster }) {
  return (
    <div
      className={`${
        view === "item"
          ? style.itemView
          : view === "detail"
          ? style.detailView
          : null
      } ${poster.url ? style.poster : style.posterNotFound}`}
    >
      {poster.url ? (
        <img
          src={poster.url}
          style={{
            aspectRatio: poster.width + "/" + poster.height,
          }}
          alt={movie.original_title}
        />
      ) : (
        <div className={style.noImage}>
          <img src={noImage} alt="Not found" />
        </div>
      )}
    </div>
  );
}

export default Poster;
