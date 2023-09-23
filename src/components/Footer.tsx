import React, { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { footer } from '../styles/global.style';

const Footer: FC = () => {
  return (
    <footer>
        <div css={[footer]}>
        Phone Book Apps | Tegar Faris Nurhakim
        </div>
    </footer>
  )
}

export default Footer;