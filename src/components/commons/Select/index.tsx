import React from 'react';
import './Select.scss';

type SelectProps = {
  options: string[];
  value: string;
  className?: string;
  name?: string;
  id?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<SelectProps> = ({ name, className, id, options, value, onChange }) => (
  <select name={name} id={id} className={`select ${className}`} value={value} onChange={onChange}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Select;