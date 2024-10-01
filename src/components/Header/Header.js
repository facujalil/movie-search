import React from "react";
import style from "./Header.module.css";
import Menu from "./Menu/Menu";

function Header() {
  return (
    <header className={style.header}>
      <h1>Movie Search</h1>
      <Menu />
    </header>
  );
}

export default Header;
