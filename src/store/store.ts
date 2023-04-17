import { configureStore } from '@reduxjs/toolkit';
import { StoreState } from './types';
import { searchSlice } from './search';
import { cardsSlice } from './cards';
// import searchReducer from './slices/STATE_SEARCH_REDUCER';
// import formReducer from './slices/FORM_REDUCER';

export const store = configureStore<StoreState>({
  reducer: {
    // form: formReducer,
    search: searchSlice.reducer,
    cardsState: cardsSlice.reducer,
  },
});
