import React, { useEffect } from 'react';
import './Search.scss';
import { useForm } from 'react-hook-form';

export function Search({ setQuery }: { setQuery: React.Dispatch<React.SetStateAction<string>> }) {
  useEffect(() => {
    return () => localStorage.setItem('inputValue', getValues().inputSearch || '');
  });

  const { register, handleSubmit, getValues } = useForm();

  const onSubmit = () => {
    setQuery(getValues().inputSearch);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('inputSearch')}
        className="header-input"
        placeholder="Search for ..."
        type="search"
        defaultValue={localStorage.getItem('inputValue') || ''}
      ></input>
    </form>
  );
}
