import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardsState } from './cards.types';
import { CardDto } from 'types/cards.dto';

const initialState: CardsState['cardsState'] = {
  cards: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<CardDto[]>) => {
      state.cards = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});
