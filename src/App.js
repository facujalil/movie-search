import { useState } from "react";
import style from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components//Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: null,
  });

  return (
    <div className={style.app}>
      <Header
        setMovieList={setMovieList}
        pagination={pagination}
        setPagination={setPagination}
      />

      <Main
        movieList={movieList}
        pagination={pagination}
        setPagination={setPagination}
      />

      <Footer />
    </div>
  );
}

export default App;
