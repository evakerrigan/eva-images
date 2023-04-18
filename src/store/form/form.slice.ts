import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormState, FormCard } from './form.types';

const initialState: FormState['formState'] = {
  forms: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setForms: (state, action: PayloadAction<FormCard>) => {
      state.forms.push(action.payload);
    },
  },
});
