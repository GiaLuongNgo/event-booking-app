import { render, fireEvent } from '@testing-library/react';
import Input from './index';
import { describe, expect, it, vi } from 'vitest';

describe('Input', () => {

  it('calls onChange correctly', () => {
    const handleChange = vi.fn();
    const { getByPlaceholderText } = render(
      <Input
        value=""
        name="inputName"
        id="inputId"
        className="custom-class"
        onChange={handleChange}
        placeholder="Enter text"
      />
    );
    const inputElement = getByPlaceholderText('Enter text');
    fireEvent.change(inputElement, { target: { value: 'Test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});