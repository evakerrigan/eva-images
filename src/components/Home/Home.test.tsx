import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('CardItem renders correctly', () => {
  render(<Home />);
  const textElement = screen.getByText('Home');
  expect(textElement).toBeInTheDocument();
});
