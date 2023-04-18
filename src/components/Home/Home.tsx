import React from 'react';
import './Home.scss';
import { CardItem } from '../CardItem/CardItem';
import { useSelector } from 'react-redux';
import { StoreState } from '../../store/types';
import { selectorSearchInput } from '../../store/search';
import { useFetchCards } from '../../hooks/useFetchCards';
import { selectorCards, selectorCardsLoading } from '../../store/cards';
import { CardDto } from 'types/cards.dto';

export function Home() {
  const inputRedux = useSelector<StoreState, string>(selectorSearchInput);
  const dataCardsRedux = useSelector<StoreState, CardDto[]>(selectorCards);
  const loadingCardsRedux = useSelector<StoreState, boolean>(selectorCardsLoading);

  useFetchCards({ search: inputRedux });

  if (loadingCardsRedux) return <div className="loading">Loading...</div>;

  return (
    <div className="wrapper">
      <h2>Home</h2>
      <ul className="card-list">
        {dataCardsRedux?.map((card) => (
          <li className="card-item" key={card.id}>
            <CardItem card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
}
