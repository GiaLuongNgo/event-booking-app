import React, { useEffect } from 'react';
import './Alert.scss';

type AlertProps = {
  message: string;
  onClose: () => void;
  type?: string;
};

const Alert: React.FC<AlertProps> = ({ message, onClose, type }) => {
// using useEffect to close the alert after 3 seconds
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className={`alert ${type}`}>{message}</div>;
};

export default Alert;