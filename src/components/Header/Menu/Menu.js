import React, { useEffect, useState } from "react";
import style from "./Menu.module.css";
import SearchForm from "./SearchForm/SearchForm";
import ResultMessage from "./ResultMessage/ResultMessage";
import GenreList from "./GenreList/GenreList";

function Menu({ setMovieList, pagination, setPagination }) {
  const [genreId, setGenreId] = useState(28);
  const [searchMovie, setSearchMovie] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  useEffect(() => {
    if (genreId && !searchMovie) {
      getMoviesByGenreId(genreId, pagination.currentPage);
    }
  }, [genreId, searchMovie, pagination.currentPage]);

  const getMoviesByGenreId = async (genreId, page) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${page}&api_key=${process.env.REACT_APP_API_KEY}`
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.menu}>
      <SearchForm
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        pagination={pagination}
        setPagination={setPagination}
        setMovieList={setMovieList}
        setResultMessage={setResultMessage}
      />

      {searchMovie && resultMessage ? (
        <ResultMessage
          setSearchMovie={setSearchMovie}
          resultMessage={resultMessage}
          setResultMessage={setResultMessage}
          setPagination={setPagination}
        />
      ) : (
        <GenreList
          genreId={genreId}
          setGenreId={setGenreId}
          setPagination={setPagination}
        />
      )}
    </div>
  );
}

export default Menu;
