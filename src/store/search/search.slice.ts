import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from './search.types';

const initialState: SearchState['search'] = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
