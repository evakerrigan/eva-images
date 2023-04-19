import { store } from '../store';
import * as reduxHooks from 'react-redux';

export const itemForm = {
  photo: 'string',
  title: 'string',
  select: 'string',
  date: 'string',
  style: 'string',
};

jest.mock('react-redux');

describe('Form redux state tests', () => {
  it('Should initially set cards to an empty object', () => {
    const state = store.getState().formState;
    expect(state.forms).toEqual([]);
  });
});

describe('Form redux ', () => {
  it('Should initially ', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([]);
    const state = store.getState().formState;
    expect(state.forms).toEqual([]);
  });
});
