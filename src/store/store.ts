import { configureStore } from '@reduxjs/toolkit';
import { StoreState } from './types';
import { searchSlice } from './search';
import { cardsSlice } from './cards';
import { formSlice } from './form';

export const store = configureStore<StoreState>({
  reducer: {
    search: searchSlice.reducer,
    cardsState: cardsSlice.reducer,
    formState: formSlice.reducer,
  },
});
