import React, { ChangeEvent, Component } from 'react';
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ inputValue: event.target.value });
  }

  componentDidMount(): void {
    const inputStorageValue = localStorage.getItem('inputValue');
    if (inputStorageValue) {
      this.setState({ inputValue: inputStorageValue });
    }
  }

  componentWillUnmount(): void {
    localStorage.setItem('inputValue', this.state.inputValue);
  }

  render() {
    return (
      <input
        className="header-input"
        placeholder="Search for ..."
        type="text"
        value={this.state.inputValue}
        onChange={this.handleChange}
      ></input>
    );
  }
}
