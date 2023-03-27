import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('App renders correctly', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const textElement = screen.getByText('Kseniia Liubasova');
  expect(textElement).toBeInTheDocument();
});

// describe('App', () => {
//   it('App renders', () => {
//     render(<App />);
//     const element = screen.getByText(/cards/i);
//     expect(element).toBeInTheDocument();
//   });
// });
