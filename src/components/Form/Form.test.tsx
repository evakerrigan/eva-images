import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from './Form';

test('Form renders correctly', () => {
  render(<Form />);
  const textElement = screen.getByText('Form for your:');
  expect(textElement).toBeInTheDocument();
});
