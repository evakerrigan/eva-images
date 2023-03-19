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
    console.log('                   ');
    console.log('***МОНТИРОВАНИЕ ИНПУТА***');
    console.log('this.state.inputValue = ', this.state.inputValue);
    const inputStorageValue = localStorage.getItem('inputValue');
    if (inputStorageValue) {
      console.log('в локалсторадже = ', inputStorageValue);
      this.setState({ inputValue: inputStorageValue });
      console.log('после setState в локалсторадже = ', inputStorageValue);
    } else {
      console.log('в локалсторадже ПУСТО !');
    }
  }

  componentWillUnmount(): void {
    console.log('                  ');
    console.log('***РАЗМОНТИРОВАНИЕ ИНПУТА***');
    console.log('this.state.inputValue = ', this.state.inputValue);
    const inputStorageValue = localStorage.getItem('inputValue');
    console.log('в локалсторадже = ', inputStorageValue);
    localStorage.setItem('inputValue', this.state.inputValue);
    console.log('после setState в локалсторадже = ', inputStorageValue);
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
