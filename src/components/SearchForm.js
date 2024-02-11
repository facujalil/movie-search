import React from "react";
import "../css/SearchForm.css";

function SearchForm({
  setMovies,
  searchedMovie,
  setSearchedMovie,
  setTopic,
  setError,
}) {
  const searchMovie = async (e) => {
    e.preventDefault();
    if (searchedMovie) {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchedMovie}&api_key=e33ba4ffa1811d3cdbfe3c3bb59332ad`
      );
      const data = await res.json();

      if (data.results.length > 0) {
        setTopic(`You search result of "${searchedMovie}"`);
        setMovies(data.results);
      } else {
        setError("No results found");
        setMovies([]);
      }
    }
  };

  return (
    <form id="search-form" onSubmit={searchMovie}>
      <input
        type="search"
        name="search"
        value={searchedMovie}
        placeholder="Search for movies"
        onChange={(e) => setSearchedMovie(e.target.value)}
      />
      <button className="search-button">
        <i className="material-symbols-outlined">search</i>
      </button>
    </form>
  );
}

export default SearchForm;
