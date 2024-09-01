import { render,  } from '@testing-library/react';
import CardEvent from './index';
import { expect, describe, it } from 'vitest';

describe('CardEvent', () => {

  const mockItem = {
    id: '1',
    image: 'test-image.jpg',
    title: 'Test Title',
    date: '2022-01-01',
    location: 'Test Location',
    description: 'Test Description',
    schedule: 'Test Schedule',
    ticketTypes: ['Type 1', 'Type 2'],
  };

  it('renders the card event correctly', () => {
    const { getByTestId, getByText } = render(<CardEvent item={mockItem} />);
    const imageElement = getByTestId('event-image-1');
    const titleElement = getByText('Test Title');
    const dateElement = getByText('2022-01-01');
    const locationElement = getByText('Test Location');
    const descriptionElement = getByText('Test Description');

    expect(imageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(locationElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});