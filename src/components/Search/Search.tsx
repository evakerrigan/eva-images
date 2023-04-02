import React, { useEffect, useState } from 'react';
import './Search.scss';

export function Search() {
  const [search, setSearch] = useState(localStorage.getItem('inputValue') || '');

  useEffect(() => {
    localStorage.setItem('inputValue', search);
  }, [search]);

  const handleOnChange = (event: { target: { value: string } }) => {
    setSearch(event.target.value);
  };

  return (
    <input
      className="header-input"
      placeholder="Search for ..."
      type="text"
      value={search}
      onChange={handleOnChange}
    ></input>
  );
}
