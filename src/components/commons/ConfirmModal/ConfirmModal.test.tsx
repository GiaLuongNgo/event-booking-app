import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ConfirmModal from './index';

describe('ConfirmModal', () => {
  it('renders the modal when isOpen is true', () => {
    const onClose = vi.fn();
    const onConfirm = vi.fn();
    const { getByText } = render(
      <ConfirmModal isOpen={true} text="Are you sure?" onClose={onClose} onConfirm={onConfirm} />
    );
    const modalElement = getByText('Are you sure?');
    expect(modalElement).toBeInTheDocument();
  });

  it('does not render the modal when isOpen is false', () => {
    const onClose = vi.fn();
    const onConfirm = vi.fn();
    const { queryByText } = render(
      <ConfirmModal isOpen={false} text="Are you sure?" onClose={onClose} onConfirm={onConfirm} />
    );
    const modalElement = queryByText('Are you sure?');
    expect(modalElement).not.toBeInTheDocument();
  });

  it('calls onConfirm when the confirm button is clicked', () => {
    const onClose = vi.fn();
    const onConfirm = vi.fn();
    const { getByText } = render(
      <ConfirmModal isOpen={true} text="Are you sure?" onClose={onClose} onConfirm={onConfirm} />
    );
    const confirmButton = getByText('Confirm');
    fireEvent.click(confirmButton);
    expect(onConfirm).toHaveBeenCalled();
  });
});