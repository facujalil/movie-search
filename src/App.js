import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [movies, setMovies] = useState([]);
  const [topic, setTopic] = useState("");
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  return (
    <div className="app">
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
