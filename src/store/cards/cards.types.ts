import { CardDto } from '../../types/cards.dto';

export interface CardsState {
  cardsState: {
    cards: CardDto[];
    loading?: boolean;
  };
  cardsApi: {
    queries: unknown;
    mutations: unknown;
    provided: unknown;
    subscriptions: unknown;
    config: unknown;
  };
}
