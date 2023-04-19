import { SearchState } from './search.types';

export const selectorSearchInput = (state: SearchState) => {
  return state?.search?.value || '';
};
