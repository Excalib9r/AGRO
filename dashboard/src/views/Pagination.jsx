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
                    ? "bg-[#f5f0bb] shadow-lg text-[#4e5447]"
                    : "bg-[#dbdfaa] hover:bg-[#f5f0bb] shadow-lg hover:text-[#4e5447] text-[#4e5447]"
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
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-[#dbdfaa] text-[#4e5447] cursor-pointer"
        >
          <BsChevronDoubleLeft />
        </li>
      )}
      {createButton()}
      {pageNumber <= totalPage && (
        <li
          onClick={() => setPageNumber(pageNumber + 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-[#dbdfaa] text-[#4e5447] cursor-pointer"
        >
          <BsChevronDoubleRight />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
