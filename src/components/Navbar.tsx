import React from "react";
import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { navigation, headNav, h1 } from "../styles/global.style";

const Navbar: React.FC = () => {
  return (
    <header css={[headNav]}>
      <Link css={[navigation]} to="/">
        <h1 css={[h1]}>Phone Book Apps</h1>
      </Link>
    </header>
  );
};

export default Navbar;
