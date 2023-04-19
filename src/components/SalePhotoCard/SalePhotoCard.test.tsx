import React from 'react';
import { render, screen } from '@testing-library/react';
import { SalePhotoCard } from './SalePhotoCard';

const i = 1;
const item = {
  photo: 'https://eva-images.netlify.app/image/cards/2.jpg',
  title: 'Photo',
  select: 'Adobe',
  date: '12.07.2016',
  style: 'Lifestyle',
};

test('Card renders correctly', () => {
  render(<SalePhotoCard key={i} item={item} />);
  const textElement = screen.getByText('Adobe');
  expect(textElement).toBeInTheDocument();
});
test('Card alt text', () => {
  render(<SalePhotoCard key={i} item={item} />);
  expect(screen.getByAltText(/.+/i)).toBeDefined();
});
