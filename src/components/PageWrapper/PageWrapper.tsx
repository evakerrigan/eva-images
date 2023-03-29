import React, { Component, ReactElement } from 'react';
import './PageWrapper.scss';
import { Header } from '../Header/Header';

export type PageWrapperProps = {
  title: string;
  content: ReactElement;
};

export class PageWrapper extends Component<PageWrapperProps> {
  render() {
    return (
      <>
        <Header title={this.props.title} />
        {this.props.content}
      </>
    );
  }
}
