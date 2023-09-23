import React, { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { avatar } from '../styles/global.style';

interface AvatarProps {
  firstName: string;
  lastName: string;
}

const Avatar: FC<AvatarProps> = ({ firstName, lastName }) => {
  const initials = (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();

  return (
    <div css={[avatar]}>
      {initials}
    </div>
  );
};

export default Avatar;