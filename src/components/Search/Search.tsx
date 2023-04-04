import React, { useEffect, useRef } from 'react';
import './Search.scss';

export function Search() {
  const refSearch = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputValue = refSearch.current;
    if (inputValue) {
      inputValue.value = localStorage.getItem('inputValue') || '';
    }
    return () => localStorage.setItem('inputValue', inputValue?.value || '');
  }, []);

  return (
    <input
      className="header-input"
      placeholder="Search for ..."
      type="text"
      ref={refSearch}
    ></input>
  );
}
