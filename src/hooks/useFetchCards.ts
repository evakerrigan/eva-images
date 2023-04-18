import { useEffect } from 'react';
import { cardsSlice } from '../store/cards';
import { useDispatch } from 'react-redux';

interface UseFetchCardsParams {
  search?: string;
}
const BASE_URL = 'https://eva-images-json-server.vercel.app/cards';

export const useFetchCards = ({ search }: UseFetchCardsParams) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let url = '';
    if (search) {
      url = `${BASE_URL}/?title_like=${search}`;
    } else {
      url = BASE_URL;
    }
    dispatch(cardsSlice.actions.startLoading());

    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        dispatch(cardsSlice.actions.setCards(data));
      })
      .finally(() => {
        dispatch(cardsSlice.actions.stopLoading());
      });
  }, [dispatch, search]);
};
