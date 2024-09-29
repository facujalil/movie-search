import React, { useEffect, useState } from "react";
import style from "./Poster.module.css";
import noImage from "../../../img/no-image.png";

function Poster({ view, movie }) {
  const [poster, setPoster] = useState({
    url: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : null,
    width: null,
    height: null,
  });

  useEffect(() => {
    getMeta(poster.url, (error, img) => {
      if (error) {
        return;
      }
      setPoster((poster) => ({
        ...poster,
        width: img.naturalWidth,
        height: img.naturalHeight,
      }));
    });
  }, []);

  const getMeta = (url, cb) => {
    const img = new Image();
    img.onload = () => cb(null, img);
    img.onerror = (error) => cb(error);
    img.src = url;
  };

  return (
    <div
      className={`${
        view === "card"
          ? style.cardView
          : view === "detail"
          ? style.detailView
          : undefined
      } ${poster.url ? style.poster : style.posterNotFound}`}
    >
      {poster.url ? (
        poster.width && poster.height ? (
          <img
            src={poster.url}
            style={{
              aspectRatio: poster.width + "/" + poster.height,
            }}
            alt={movie.original_title}
          />
        ) : (
          <div
            style={{
              outline: "1px solid #ffffff",
              outlineOffset: "-1px",
              width: "100%",
              aspectRatio: "2 / 3",
            }}
          ></div>
        )
      ) : (
        <div className={style.noImage}>
          <img src={noImage} alt="Not found" />
        </div>
      )}
    </div>
  );
}

export default Poster;
