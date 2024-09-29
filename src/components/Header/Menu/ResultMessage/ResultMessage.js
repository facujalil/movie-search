import React from "react";
import style from "./ResultMessage.module.css";

function ResultMessage({
  setSearchMovie,
  resultMessage,
  setResultMessage,
  setPagination,
}) {
  return (
    <div className={style.resultMessage}>
      <button>
        <i
          className="material-symbols-outlined"
          onClick={() => {
            setSearchMovie("");
            setResultMessage("");
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
