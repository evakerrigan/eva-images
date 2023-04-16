import { CardsState } from './cards';
import { SearchState } from './search';

export interface StoreState extends SearchState, CardsState {}
