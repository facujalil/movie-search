import React, { useContext } from "react";
import style from "./ResultMessage.module.css";
import { MoviesContext } from "context/MoviesContext";

function ResultMessage({ resultMessage, setResultMessage, setSearchMovie }) {
  const { setPagination } = useContext(MoviesContext);

  return (
    <div className={style.resultMessage}>
      <button>
        <i
          className="material-symbols-outlined"
          onClick={() => {
            setResultMessage("");
            setSearchMovie("");
            setPagination({
              currentPage: 1,
              totalPages: null,
            });
          }}
        >
          arrow_back
        </i>
      </button>
      <h2>{resultMessage}</h2>
    </div>
  );
}

export default ResultMessage;
