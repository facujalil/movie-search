import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer>
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
