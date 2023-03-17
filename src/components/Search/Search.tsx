import React, { Component } from 'react';
import './Search.scss';

export type typeStateInputValue = {
  inputValue: string;
};

export type typePropsBimbo = {
  [key: string]: never;
};

export class Search extends Component<typePropsBimbo, typeStateInputValue> {
  constructor(props: typePropsBimbo) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount(): void {}

  componentWillUnmount(): void {}

  render() {
    return <input className="header-input" placeholder="Search for ..."></input>;
  }
}
