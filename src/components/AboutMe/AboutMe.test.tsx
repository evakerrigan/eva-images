import React from 'react';
import { render, screen } from '@testing-library/react';
import { AboutMe } from './AboutMe';

test('AboutMe renders correctly', () => {
  render(<AboutMe />);
  const textElement = screen.getByText('AboutMe');
  expect(textElement).toBeInTheDocument();
});
