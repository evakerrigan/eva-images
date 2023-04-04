import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('CardItem renders correctly', () => {
  render(<Home />);
  const textElement = screen.getByText('Home');
  expect(textElement).toBeInTheDocument();
});

describe('CardList renders correctly', () => {
  it('renders Card', () => {
    render(<Home />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(27);
  });
});
