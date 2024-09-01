import React from 'react';
import './Input.scss';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  name?: string;
  id?: string;
};

const Input: React.FC<InputProps> = ({ value, name, id, className, onChange, placeholder }) => (
  <input
    className={`input ${className}`}
    type="text"
    value={value}
    name={name}
    id={id}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Input;