import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardItem, Card } from './CardItem';

const card: Card = {
  id: '1',
  title: 'horse',
  url: 'https://example.com/horse.jpg',
  shops: ['adobe.com'],
  price: '250',
  stockurl: 'https://example.com/horse.jpg',
  tags: ['animal'],
};

test('CardItem renders correctly', () => {
  render(<CardItem card={card} />);
  const textElement = screen.getByText('adobe.com');
  expect(textElement).toBeInTheDocument();
});
