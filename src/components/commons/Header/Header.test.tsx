import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './index';
import { describe, expect, it } from 'vitest';

describe('Header', () => {
  it('renders navigation links correctly', () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );
    const eventsLink = getByText('Events');
    expect(eventsLink).toBeInTheDocument();
  });

  it('renders user icon correctly', () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );
    const userIcon = getByText('👤');
    expect(userIcon).toBeInTheDocument();
  });
});