import { CardDto } from '../../types/cards.dto';

export interface CardsState {
  cards: CardDto[];
  cardsApi: {
    queries: unknown;
    mutations: unknown;
    provided: unknown;
    subscriptions: unknown;
    config: unknown;
  };
}
