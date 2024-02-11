import React, { useEffect, useState } from "react";
import "../css/Menu.css";
import SearchForm from "./SearchForm";
import Results from "./Results";
import GenreButtonList from "./GenreButtonList";

function Menu({
  movies,
  setMovies,
  topic,
  setTopic,
  error,
  setError,
  page,
  setPage,
}) {
  const [genreId, setGenreId] = useState(28);
  const [searchedMovie, setSearchedMovie] = useState("");

  useEffect(() => {
    getMoviesByGenre(genreId);
  }, [genreId, page]);

  const getMoviesByGenre = async (genreId) => {
    setTopic("");
    setError("");
    setGenreId(genreId);

    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=e33ba4ffa1811d3cdbfe3c3bb59332ad&with_genres=${genreId}&page=${page}`
    );
    const data = await res.json();

    setMovies(data.results);
  };

  return (
    <div className="menu">
      <SearchForm
        setMovies={setMovies}
        searchedMovie={searchedMovie}
        setSearchedMovie={setSearchedMovie}
        setTopic={setTopic}
        setError={setError}
      />

      {topic || error ? (
        <Results
          genreId={genreId}
          movies={movies}
          setSearchedMovie={setSearchedMovie}
          topic={topic}
          error={error}
          getMoviesByGenre={getMoviesByGenre}
        />
      ) : (
        <GenreButtonList
          genreId={genreId}
          setGenreId={setGenreId}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default Menu;
