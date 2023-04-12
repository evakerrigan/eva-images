import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { Home } from './Home';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(''),
  })
) as jest.Mock;

test('Home renders correctly', async () => {
  act(() => {
    render(<Home query={'horse'} />);
  });
  await waitFor(() => {
    const textElement = screen.getByText('Home');
    expect(textElement).toBeInTheDocument();
  });
});

describe('CardList renders correctly', () => {
  it('renders Card', () => {
    act(() => {
      render(<Home query={'horse'} />);
    });
    waitFor(() => {
      const images = screen.getAllByRole('img');
      expect(images.length).toBe(3);
    });
  });
});
