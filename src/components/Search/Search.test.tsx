import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Search } from './Search';
import { store } from '../../store/store';

describe('Search', () => {
  it('Should be defined', () => {
    expect(
      <Provider store={store}>
        <Search />
      </Provider>
    ).toBeDefined();
  });

  it('Search at placeholder', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByPlaceholderText('Search for ...')).toBeInTheDocument();
  });
});
