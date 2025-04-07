import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { searchSlice, selectorSearchInput } from '../../store/search';
import { StoreState } from '../../store/types';

export function Search() {
  const dispatch = useDispatch();
  const inputRedux = useSelector<StoreState, string>(selectorSearchInput);

  const { register, handleSubmit, getValues } = useForm();

  const onSubmit = () => {
    dispatch(searchSlice.actions.setInput(getValues().inputSearch));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('inputSearch')}
        className="header-input"
        placeholder="Показать фотографии по тегу ..."
        type="search"
        defaultValue={inputRedux}
      ></input>
    </form>
  );
}
