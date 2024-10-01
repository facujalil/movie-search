import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import MoviesProvider from "context/MoviesContext";
import App from "App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MoviesProvider>
    <App />
  </MoviesProvider>
);
