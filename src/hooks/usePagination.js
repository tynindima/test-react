import { useState } from "react";

const usePagination = (initialState) => {
  const { itemPerPage, pages, startPage } = initialState;
  const pagination = [];
  const [currentPage, setCurrentPage] = useState(
    startPage <= pages ? startPage : 1
  );

  let ellipsisLeft = false;
  let ellipsisRight = false;

  for (let i = 0; i <= pages; i++) {
    if (i === currentPage) {
      pagination.push({ id: i, current: true, ellipsis: false });
    } else {
      if (
        i < 2 ||
        i > pages - 1 ||
        i === currentPage - 1 ||
        i === currentPage + 1
      ) {
        pagination.push({ id: i, current: false, ellipsis: false });
      } else if (i > 1 && i < currentPage && !ellipsisLeft) {
        pagination.push({ id: i, current: false, ellipsis: true });
        ellipsisLeft = true;
      } else if (i < pages && i > currentPage && !ellipsisRight) {
        pagination.push({ id: i, current: false, ellipsis: true });
        ellipsisRight = true;
      }
    }
  }

  const onNextPage = () => {
    currentPage < pages && setCurrentPage((prev) => prev++);
  };

  return {};
};

export default usePagination;
