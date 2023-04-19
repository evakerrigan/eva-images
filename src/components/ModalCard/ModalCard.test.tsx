import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '../CardItem/CardItem';
import { ModalCard } from './ModalCard';
import * as hooks from '../../hooks/useFetch';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

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

test('Modal renders correctly', () => {
  render(
    <Provider store={store}>
      <ModalCard active={true} setActive={() => {}} id={'2'} />
    </Provider>
  );
  const textElement = screen.getByText('Women and horse');
  expect(textElement).toBeInTheDocument();
});
