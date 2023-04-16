import React, {useEffect} from 'react';
import './Home.scss';
import {Card, CardItem} from '../CardItem/CardItem';
import {useFetch} from '../../hooks/useFetch';
import {useSelector} from 'react-redux';
import {StoreState} from '../../store/types';
import {selectorSearchInput} from '../../store/search';

export function Home() {
  const BASE_URL = 'https://eva-images-json-server.vercel.app/cards';

  const inputLocalStorage = localStorage.getItem('inputValue') || '';
  // Вытаскиваем данные из хранилища. state – все состояние
  const inputRedux = useSelector<StoreState, string>(selectorSearchInput);
  let url = '';

  if (inputRedux) {
    url = `${BASE_URL}/?title_like=${inputRedux}`;
  } else {
    url = BASE_URL;
  }
  const {loading, data} = useFetch<Card[]>(url, [] as Card[]);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="wrapper">
      <h2>Home</h2>
      <ul className="card-list">
        {data.length &&
          data.map((card) => (
            <li className="card-item" key={card.id}>
              <CardItem card={card} />
            </li>
          ))}
      </ul>
    </div>
  );
}
