import React, { useEffect, useState } from "react";
import style from "./Pagination.module.css";

function Pagination({ topic, error, page, setPage }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {!topic && !error && (
        <div className={style.pagination}>
          <>
            <button
              className={page === 1 ? style.locked : null}
              onClick={
                page !== 1
                  ? () => {
                      setPage(page - 1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  : null
              }
            >
              <i className="material-symbols-outlined">arrow_back</i>
              {windowWidth > 370 ? <span>Previous</span> : null}
            </button>

            <span className={style.currentPageNumber}>{page}</span>

            <button
              className={page === 99 ? style.locked : null}
              onClick={
                page !== 99
                  ? () => {
                      setPage(page + 1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  : null
              }
            >
              {windowWidth > 370 ? <span>Next</span> : null}
              <i className="material-symbols-outlined">arrow_forward</i>
            </button>
          </>
        </div>
      )}
    </>
  );
}

export default Pagination;
