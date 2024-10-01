import React, { createContext, useState } from "react";

export const MoviesContext = createContext();

function MoviesProvider({ children }) {
  const [movieList, setMovieList] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: null,
  });

  const value = {
    movieList,
    setMovieList,
    pagination,
    setPagination,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
}

export default MoviesProvider;
