import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '@/App';

describe('App', () => {
  it('renders headline', () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();
  });
});