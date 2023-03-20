import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from './NotFound';

test('NotFound renders correctly', () => {
  render(<NotFound />);
  const textElement = screen.getByText('NotFound');
  expect(textElement).toBeInTheDocument();
});
