import React from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const Pagination = ({
  pageNumber,
  setPageNumber,
  totalItem,
  perPage,
  showItem,
}) => {
  let totalPage = Math.ceil(totalItem / perPage);
  let startPage = pageNumber;

  let dif = totalPage - pageNumber;

  if (showItem > 6) {
    showItem = 5;
  }

  if (dif <= showItem) {
    startPage = totalPage - showItem;
  }

  let endPage = startPage < 0 ? showItem : showItem + startPage;

  if (startPage <= 0) {
    startPage = 1;
  }

  const createButton = () => {
    const btns = [];

    for (let i = startPage; i <= endPage; i++) {
      btns.push(
        <li
          onClick={() => setPageNumber(i)}
          className={`
                ${
                  pageNumber === i
                    ? "bg-violet-400 shadow-lg text-white"
                    : "bg-violet-700 hover:bg-violet-400 shadow-lg hover:text-white text-white"
                } w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer`}
        >
          {i}
        </li>
      );
    }
    return btns;
  };

  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumber(pageNumber - 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-violet-700 text-white cursor-pointer"
        >
          <BsChevronDoubleLeft />
        </li>
      )}
      {createButton()}
      {pageNumber <= totalPage && (
        <li
          onClick={() => setPageNumber(pageNumber + 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-violet-700 text-white cursor-pointer"
        >
          <BsChevronDoubleRight />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
