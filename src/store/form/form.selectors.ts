import { FormState } from './form.types';

export const selectorForm = (state: FormState) => {
  return state.formState.forms || [];
};
