import React from "react";
import style from "./Pagination.module.css";

function Pagination({ movieList, pagination, setPagination }) {
  const navigateToPage = (direction) => {
    setPagination((pagination) => ({
      ...pagination,
      currentPage:
        direction === "previous"
          ? pagination.currentPage - 1
          : direction === "next"
          ? pagination.currentPage + 1
          : pagination.currentPage,
    }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return movieList.length > 0 ? (
    <div className={style.pagination}>
      <button
        className={pagination.currentPage === 1 ? style.locked : undefined}
        onClick={() =>
          pagination.currentPage !== 1 ? navigateToPage("previous") : null
        }
      >
        <i className="material-symbols-outlined">arrow_back</i>
        <span>Previous</span>
      </button>
      <span className={style.currentPage}>{pagination.currentPage}</span>
      <button
        className={
          pagination.currentPage === pagination.totalPages
            ? style.locked
            : undefined
        }
        onClick={() =>
          pagination.currentPage !== pagination.totalPages
            ? navigateToPage("next")
            : null
        }
      >
        <span>Next</span>
        <i className="material-symbols-outlined">arrow_forward</i>
      </button>
    </div>
  ) : null;
}

export default Pagination;
