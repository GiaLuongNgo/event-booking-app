import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Chip from './index';

describe('Chip', () => {
  it('renders the label correctly', () => {
    const label = 'Test Label';
    const { getByText } = render(<Chip label={label} />);
    const chipElement = getByText(label);
    expect(chipElement).toBeInTheDocument();
  });
});