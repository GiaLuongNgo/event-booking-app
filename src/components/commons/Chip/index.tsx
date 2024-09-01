import React from 'react';
import './Chip.scss';

type ChipProps = {
  label: string;
};

const Chip: React.FC<ChipProps> = ({ label }) => (
  <span className="chip">{label}</span>
);

export default Chip;