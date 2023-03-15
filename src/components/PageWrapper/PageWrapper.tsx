import React, { Component, ReactElement } from 'react';
import './PageWrapper.scss';
import { Header } from '../Header/Header';

export class PageWrapper extends Component<{ title: string; content: ReactElement }> {
  render() {
    return (
      <>
        <Header title={this.props.title} />
        {this.props.content}
      </>
    );
  }
}
