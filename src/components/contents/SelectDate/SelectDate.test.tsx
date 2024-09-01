import { render, fireEvent } from '@testing-library/react';
import SelectDate from './index';
import { expect, describe, it, vi } from 'vitest';

describe('SelectDate', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <SelectDate value="asc" onChange={() => {}} />
    );
    const ascendingOption = getByText('Date Ascending');
    const descendingOption = getByText('Date Descending');
    expect(ascendingOption).toBeInTheDocument();
    expect(descendingOption).toBeInTheDocument();
  });

  it('applies className correctly', () => {
    const { container } = render(
      <SelectDate value="asc" onChange={() => {}} className="custom-class" />
    );
    expect(container.firstChild).toHaveClass('select-date');
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('calls onChange correctly', () => {
    const handleChange = vi.fn();
    const { getByRole } = render(
      <SelectDate value="asc" onChange={handleChange} />
    );
    const selectElement = getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'desc' } });
    expect(handleChange).toHaveBeenCalledWith('desc');
  });
});