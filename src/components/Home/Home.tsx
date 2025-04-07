import React from 'react';
import './Home.scss';
import { CardItem } from '../CardItem/CardItem';
import { useSelector } from 'react-redux';
import { StoreState } from '../../store/types';
import { selectorSearchInput } from '../../store/search';
import { useFetchCardsQuery } from '../../store/api/rtk-query';
import { CardDto } from 'types/cards.dto';
import { Loader } from '../Loader/Loader';

export function Home() {
  const inputRedux = useSelector<StoreState, string>(selectorSearchInput);

  const { data: dataCardsRedux, isLoading } = useFetchCardsQuery(inputRedux);

  if (isLoading) return <Loader />;

  return (
    <div className="wrapper">
      <h2>Главная</h2>
      <ul className="card-list">
        {dataCardsRedux?.map((card: CardDto) => (
          <li className="card-item" key={card.id}>
            <CardItem card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
}
