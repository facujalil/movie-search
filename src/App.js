import { useState } from "react";
import style from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components//Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [movies, setMovies] = useState([]);
  const [topic, setTopic] = useState("");
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  return (
    <div className={style.app}>
      <Header
        movies={movies}
        setMovies={setMovies}
        topic={topic}
        setTopic={setTopic}
        error={error}
        setError={setError}
        page={page}
        setPage={setPage}
      />

      <Main
        movies={movies}
        topic={topic}
        error={error}
        page={page}
        setPage={setPage}
      />

      <Footer />
    </div>
  );
}

export default App;
