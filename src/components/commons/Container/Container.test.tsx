import { render } from '@testing-library/react';
import Container from './index';
import { describe, expect, it } from 'vitest';


describe('Container', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Container>
        <div>Test Child</div>
      </Container>
    );
    const childElement = getByText('Test Child');
    expect(childElement).toBeInTheDocument();
  });

  it('applies className correctly', () => {
    const { container } = render(
      <Container className="custom-class">
        <div>Test Child</div>
      </Container>
    );
    expect(container.firstChild).toHaveClass('container');
    expect(container.firstChild).toHaveClass('custom-class');
  });
});