import React from 'react';
// import { store } from '../../store/store';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { setInput } from '../../store/slices/inputSlice';
// import { InputPayload } from '../../store/slices/INPUT_REDUCER';

export function Search({ setQuery }: { setQuery: React.Dispatch<React.SetStateAction<string>> }) {
  // Вытаскиваем данные из хранилища. state – все состояние

  const inputRedux = useSelector((state) => state.input.value) || '';
  // Возвращает метод store.dispatch() текущего хранилища
  const dispatch = useDispatch();

  const { register, handleSubmit, getValues } = useForm();

  const onSubmit = () => {
    console.log('valueInput =', getValues().inputSearch);
    dispatch(setInput(getValues().inputSearch));
    setQuery(getValues().inputSearch);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('inputSearch')}
        className="header-input"
        placeholder="Search for ..."
        type="search"
        defaultValue={inputRedux}
      ></input>
    </form>
  );
}
