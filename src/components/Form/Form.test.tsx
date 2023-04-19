import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Form } from './Form';
import { store } from '../../store/store';

test('Form renders correctly', () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  );
  fireEvent.click(screen.getByRole('button', { name: /Send/i }));
  const textElement = screen.getByText('Form for your:');
  expect(textElement).toBeInTheDocument();
});
