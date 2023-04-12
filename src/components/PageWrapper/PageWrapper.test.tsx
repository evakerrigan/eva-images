import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PageWrapper } from './PageWrapper';
import { AboutMe } from '../AboutMe/AboutMe';

test('PageWrapper renders correctly', () => {
  act(() => {
    render(
      <BrowserRouter>
        <PageWrapper setQuery={() => ''} title="AboutMe" content={<AboutMe />} />
      </BrowserRouter>
    );
  });
  const textElement = screen.getByText('Photographer');
  expect(textElement).toBeInTheDocument();
});
