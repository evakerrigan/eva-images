import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InputPayload {
  value: string;
}
const initialState: InputPayload = {
  value: '',
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<InputPayload>) => {
      state.value = action.payload.value;
    },
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { setInput } = inputSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export const inputReducer = inputSlice.reducer;
