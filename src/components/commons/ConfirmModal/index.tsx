import React from 'react';
import './ConfirmModal.scss';
import { CloseIcon } from '@/components/icons/IconClose';

type ConfirmModalProps = {
  isOpen: boolean;
  text: string;
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose, text, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        <div className="close-button" onClick={onClose}>
          <CloseIcon />
        </div>
        <p>{text}</p>
        <div className="buttons">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="confirm-button" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;