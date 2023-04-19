import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(''),
  })
) as jest.Mock;

test('App renders correctly', async () => {
  act(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  });
  waitFor(() => {
    const textElement = screen.getByText('Kseniia Liubasova');
    expect(textElement).toBeInTheDocument();
  });
});
