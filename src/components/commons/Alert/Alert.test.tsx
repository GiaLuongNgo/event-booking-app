import { render, screen, act } from '@testing-library/react';
import Alert from './index';
import { describe, expect, it, vi } from 'vitest';

describe('Alert', () => {
  it('renders the message correctly', () => {
    const message = 'Test Message';
    render(<Alert message={message} onClose={() => {}} />);
    const alertElement = screen.getByText(message);
    expect(alertElement).toBeInTheDocument();
  });

  it('calls onClose after 3 seconds', async () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    render(<Alert message="Test Message" onClose={onClose} />);
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(onClose).toHaveBeenCalled();
  });
});