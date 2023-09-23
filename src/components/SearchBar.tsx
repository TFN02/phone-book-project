import React, { ChangeEvent } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { searchbar } from '../styles/global.style';

interface SearchBarProps {
  keyword: string | null;
  keywordChange: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ keyword, keywordChange }) => {
  const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
    keywordChange(event.target.value);
  };

  return (
    <section>
      <input
        css={[searchbar]}
        type="text"
        placeholder="Cari berdasarkan Nama Contact ..."
        value={keyword !== null ? keyword : ''}
        onChange={handleKeywordChange}
      />
    </section>
  );
};

export default SearchBar