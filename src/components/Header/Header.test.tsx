import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

test('Header renders correctly', () => {
  render(
    <BrowserRouter>
      <Header setQuery={() => ''} title="Home" />
    </BrowserRouter>
  );
  const textElement = screen.getByText('Kseniia Liubasova');
  expect(textElement).toBeInTheDocument();
});
