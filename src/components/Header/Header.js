import React from "react";
import style from "./Header.module.css";
import Menu from "./Menu/Menu";

function Header({ setMovieList, pagination, setPagination }) {
  return (
    <header className={style.header}>
      <h1>Movie Search</h1>

      <Menu
        setMovieList={setMovieList}
        pagination={pagination}
        setPagination={setPagination}
      />
    </header>
  );
}

export default Header;
