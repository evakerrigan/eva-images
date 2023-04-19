import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Form } from './Form';
import { store } from '../../store/store';

test('Form renders correctly', async () => {
  act(() => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
  });
  const textElement = screen.getByText('Form for your:');
  await expect(textElement).toBeInTheDocument();
});
