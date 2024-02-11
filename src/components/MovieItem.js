import React, { useEffect, useState } from "react";
import "../css/MovieItem.css";
import Poster from "./Poster";

function MovieItem({ movie, setMovieDetail, setModal }) {
  const [poster, setPoster] = useState({
    url:
      movie.poster_path &&
      `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    width: "500",
    height: "750",
  });

  useEffect(() => {
    getMeta(poster.url, (err, img) => {
      if (err) {
        return;
      }
      setPoster({
        ...poster,
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    });
  }, []);

  const getMeta = (url, cb) => {
    const img = new Image();
    img.onload = () => cb(null, img);
    img.onerror = (err) => cb(err);
    img.src = url;
  };

  const openModal = async () => {
    const scrollbarWidth = `${
      (window.innerWidth - document.body.clientWidth) / 2
    }px`;

    document.body.style.overflow = "hidden";
    document.body.style.padding = `0 ${scrollbarWidth} `;

    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=e33ba4ffa1811d3cdbfe3c3bb59332ad`
    );
    const data = await res.json();

    Object.assign(data, { poster: poster });

    setMovieDetail(data);
    setModal(true);
  };

  return (
    <div className="movie-item" onClick={openModal}>
      <Poster movie={movie} poster={poster} />
      <h4 className="movie-item-title">{movie.original_title}</h4>
    </div>
  );
}

export default MovieItem;
