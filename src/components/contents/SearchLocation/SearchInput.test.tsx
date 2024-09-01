import { render, screen, fireEvent } from '@testing-library/react';
import SearchLocation from './index';
import { expect, test, vi } from 'vitest';

test('renders SearchLocation component', () => {
    const value = 'New York';
    const onChange = vi.fn();

    render(<SearchLocation value={value} onChange={onChange} />);
    
    const inputElement = screen.getByPlaceholderText('Filter by location') as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(value);
});

test('calls onChange function when input value changes', () => {
  const value = 'New York';
  const onChange = vi.fn();

  render(<SearchLocation value={value} onChange={onChange} />);
  const inputElement = screen.getByPlaceholderText('Filter by location');
  fireEvent.change(inputElement, { target: { value: 'Los Angeles' } });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith('Los Angeles');
});