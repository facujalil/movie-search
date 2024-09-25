import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <p>
        &copy; Coded by{" "}
        <a href="https://github.com/facujalil" target="_blank" rel="noreferrer">
          Facundo Jalil
          <i className="fab fa-github-square" aria-hidden="true"></i>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
