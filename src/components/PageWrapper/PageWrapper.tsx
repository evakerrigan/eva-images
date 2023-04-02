import React, { ReactElement } from 'react';
import './PageWrapper.scss';
import { Header } from '../Header/Header';

export type PageWrapperProps = {
  title: string;
  content: ReactElement;
};

export function PageWrapper({ title, content }: PageWrapperProps) {
  return (
    <>
      <Header title={title} />
      {content}
    </>
  );
}
