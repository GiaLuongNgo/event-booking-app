import { render, fireEvent } from '@testing-library/react';
import Input from './index';

describe('Input', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <Input
        value=""
        name="inputName"
        id="inputId"
        className="custom-class"
        onChange={() => {}}
        placeholder="Enter text"
      />
    );
    const inputElement = getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onChange correctly', () => {
    const handleChange = jest.fn();
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
    expect(handleChange).toHaveBeenCalledWith('Test');
  });
});