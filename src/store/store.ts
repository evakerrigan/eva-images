import { configureStore } from '@reduxjs/toolkit';

import {searchSlice} from './search';
// import searchReducer from './slices/STATE_SEARCH_REDUCER';
// import formReducer from './slices/FORM_REDUCER';

export const store = configureStore({
  reducer: {
    // form: formReducer,
    // search: searchReducer,
    // input – это свойство будет внутри объекта общего состояния: state.input
    search: searchSlice.reducer,
  },
});
