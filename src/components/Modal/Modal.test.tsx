import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

test('Modal renders correctly', () => {
  render(<Modal />);
  const textElement = screen.getByText('Your photo has been sent for sale !');
  expect(textElement).toBeInTheDocument();
});
