import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

test('Header renders correctly', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header title="Home" />
      </Provider>
    </BrowserRouter>
  );
  const textElement = screen.getByText('Kseniia Liubasova');
  expect(textElement).toBeInTheDocument();
});
