import { render } from '@testing-library/react';
import Select from './index';
import { describe, expect, it, vi } from 'vitest';

describe('Select', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const onChange = vi.fn();

  it('applies className correctly', () => {
    const { container } = render(
      <Select options={options} value="" onChange={onChange} className="custom-class" />
    );

    const selectElement = container.querySelector('.select');
    expect(selectElement).toHaveClass('custom-class');
  });
});