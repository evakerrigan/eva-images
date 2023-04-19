import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Form } from './Form';
import { store } from '../../store/store';

test('Form renders correctly', () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  );
  const textElement = screen.getByText('Form for your:');
  expect(textElement).toBeInTheDocument();
});
