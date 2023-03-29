import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

test('Footer renders correctly', () => {
  render(<Footer />);
  const textElement = screen.getByText('evakerrigan');
  expect(textElement).toBeInTheDocument();
});
