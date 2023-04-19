import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from './search';
import { formSlice } from './form';
import { cardsApi } from './api/rtk-query';

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
    formState: formSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});
