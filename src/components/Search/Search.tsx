import React, { useEffect, useRef, useState } from 'react';
import './Search.scss';

export type typeStateInputValue = {
  inputValue: string;
};

export type typePropsBimbo = {
  [key: string]: never;
};

export function Search(
  props: { [key: string]: typePropsBimbo },
  state: { inputValue: typeStateInputValue }
) {
  const [search, setSearch] = useState(localStorage.getItem('inputValue') || '');
  const searchRef = useRef(search);

  useEffect(() => {
    setSearch(localStorage.getItem('inputValue') || '');

    return () => {
      localStorage.setItem('inputValue', searchRef.current || '');
    };
  }, []);

  const handleOnChange = (value: string) => {
    setSearch(value);
    searchRef.current = value;
  };

  return (
    <input
      className="header-input"
      placeholder="Search for ..."
      type="text"
      value={state.inputValue}
      onChange={handleOnChange}
    ></input>
  );
}

// constructor(props: typePropsBimbo) {
//   super(props);
//   this.state = {
//     inputValue: '',
//   };
//   this.handleChange = this.handleChange.bind(this);
// }

// handleChange(event: ChangeEvent<HTMLInputElement>): void {
//   this.setState({ inputValue: event.target.value });
// }

// componentDidMount(): void {
//   const inputStorageValue = localStorage.getItem('inputValue');
//   if(inputStorageValue) {
//     this.setState({ inputValue: inputStorageValue });
//   }
// }

// componentWillUnmount(): void {
//   localStorage.setItem('inputValue', this.state.inputValue);
// }
