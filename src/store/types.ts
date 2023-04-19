import { CardsState } from './cards';
import { SearchState } from './search';
import { FormState } from './form';

export interface StoreState extends SearchState, CardsState, FormState {}
