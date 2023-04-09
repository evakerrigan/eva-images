import React, { ReactElement } from 'react';
import './PageWrapper.scss';
import { Header } from '../Header/Header';

export type PageWrapperProps = {
  title: string;
  content: ReactElement;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export function PageWrapper({ title, content, setQuery }: PageWrapperProps) {
  return (
    <>
      <Header setQuery={setQuery} title={title} />
      {content}
    </>
  );
}
