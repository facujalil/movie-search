import React from "react";
import "../css/Poster.css";
import noImage from "../img/no-image.png";

function Poster({ movie, poster }) {
  return (
    <div className={poster.url ? "poster" : "poster-not-found"}>
      {poster.url ? (
        <img
          src={poster.url}
          style={{
            aspectRatio: poster.width + "/" + poster.height,
          }}
          alt={movie.original_title}
        />
      ) : (
        <div className="no-image">
          <img src={noImage} alt="Not found" />
        </div>
      )}
    </div>
  );
}

export default Poster;
