import React, { FC } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { btnPagination, contactDiv, pagination } from "../styles/global.style";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

interface PaginationProps {
  handlePrevPage: () => void;
  currentPage: number;
  handleNextPage: () => void;
  totalPageCount: number;
}

const Pagination: FC<PaginationProps> = ({
  handlePrevPage,
  currentPage,
  handleNextPage,
  totalPageCount,
}) => {
  return (
    <div css={[contactDiv]}>
      <h2>Contact List</h2>
      <div css={[pagination]}>
        <button
          css={[btnPagination]}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <MdKeyboardDoubleArrowLeft size={50} />
        </button>
        <p css={[btnPagination]}>{currentPage}</p>
        <button
          css={[btnPagination]}
          onClick={handleNextPage}
          disabled={currentPage === totalPageCount}
        >
          <MdKeyboardDoubleArrowRight size={50} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;