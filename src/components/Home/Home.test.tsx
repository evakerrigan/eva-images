import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { Home } from './Home';
import { Card } from '../CardItem/CardItem';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

import * as hooks from '../../hooks/useFetch';

const mockCardItem = {
  id: '2',
  title: 'Women and horse',
  url: 'image/cards/2.jpg',
  shops: ['adobe.com'],
  price: '250',
  stockurl:
    'https://stock.adobe.com/ru/images/young-woman-walks-with-horse-across-field-meadow/472470015?prev_url=detail',
  tags: ['horse, young, woman, getting away from it all'],
} as Card;

jest.spyOn(hooks, 'useFetch').mockImplementation(() => {
  return {
    loading: false,
    data: [mockCardItem],
    error: '',
  };
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(''),
  })
) as jest.Mock;

test('Home renders correctly', async () => {
  act(() => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });
  await waitFor(() => {
    const textElement = screen.getByText('Home');
    expect(textElement).toBeInTheDocument();
  });
});

describe('CardList renders correctly', () => {
  it('renders Card', () => {
    act(() => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
    });
    waitFor(() => {
      const images = screen.getAllByRole('img');
      expect(images.length).toBe(3);
    });
  });
});
