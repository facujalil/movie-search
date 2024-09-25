import React from "react";
import style from "./Header.module.css";
import Menu from "./Menu/Menu";

function Header({
  movies,
  setMovies,
  topic,
  setTopic,
  error,
  setError,
  page,
  setPage,
}) {
  return (
    <header className={style.header}>
      <h1>Movie Search</h1>

      <Menu
        movies={movies}
        setMovies={setMovies}
        topic={topic}
        setTopic={setTopic}
        error={error}
        setError={setError}
        page={page}
        setPage={setPage}
      />
    </header>
  );
}

export default Header;
