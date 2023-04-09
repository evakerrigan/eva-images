import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('CardItem renders correctly', () => {
  render(<Home query={'horse'} />);
  const textElement = screen.getByText('Home');
  expect(textElement).toBeInTheDocument();
});

describe('CardList renders correctly', () => {
  it('renders Card', () => {
    render(<Home query={'horse'} />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(3);
  });
});
