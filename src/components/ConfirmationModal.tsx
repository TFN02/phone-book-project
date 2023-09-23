import React, { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { btnBackModal, btnYesModal, modal, modalOverlay } from '../styles/global.style';

interface ConfirmationModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div css={[modalOverlay]}>
      <div css={[modal]}>
        <p>Apakah Anda yakin ingin menghapus kontak ini?</p>
        <button css={[btnBackModal]} onClick={onCancel}>Kembali</button>
        <button css={[btnYesModal]} onClick={onConfirm}>Yakin</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;