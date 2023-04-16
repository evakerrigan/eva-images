import { CardsState } from './cards.types';

export const selectorCards = (state: CardsState) => {
  return state.cardsState.cards || [];
};

export const selectorCardsLoading = (state: CardsState) => {
  return state.cardsState.loading || false;
};
