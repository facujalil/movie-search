import React, { useEffect, useState } from "react";
import style from "./SearchForm.module.css";

function SearchForm({
  searchMovie,
  setSearchMovie,
  pagination,
  setPagination,
  setMovieList,
  setResultMessage,
}) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (searchMovie) {
      getMoviesBySearch(searchMovie, pagination.currentPage);
    }
  }, [searchMovie, pagination.currentPage]);

  useEffect(() => {
    if (!searchMovie) {
      setInput("");
    }
  }, [searchMovie]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (input) {
      setSearchMovie(input);
      setPagination({ currentPage: 1, totalPages: null });
    }
  };

  const getMoviesBySearch = async (searchMovie, page) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&page=${page}&api_key=${process.env.REACT_APP_API_KEY}`
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.status_message || "Something went wrong.");
      }

      const data = await res.json();
      setMovieList(data.results);
      setPagination((pagination) => ({
        ...pagination,
        totalPages: data.total_pages < 100 ? data.total_pages : 99,
      }));
      if (data.results.length > 0) {
        setResultMessage(`You search result of "${searchMovie}"`);
      } else {
        setResultMessage("No results found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={style.searchForm} onSubmit={handleSearch}>
      <input
        type="search"
        name="search"
        value={input}
        placeholder="Search for movies"
        onChange={(e) => setInput(e.target.value)}
      />
      <button>
        <i className="material-symbols-outlined">search</i>
      </button>
    </form>
  );
}

export default SearchForm;
