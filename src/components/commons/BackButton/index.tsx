import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.scss';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

// handle click event to navigate back
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div data-testid="back-button" className="back-button">
      <i className="back-icon" onClick={handleClick}>
        &larr;
      </i>
    </div>
  );
};

export default BackButton;