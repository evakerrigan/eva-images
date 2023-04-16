import { CardDto } from '../../types/cards.dto';

export interface CardsState {
  cardsState: {
    cards: CardDto[];
    loading?: boolean;
  };
}
