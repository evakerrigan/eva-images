import React from 'react';
import './Home.scss';
import { Card, CardItem } from '../CardItem/CardItem';
import { useFetch } from '../../hooks/useFetch';

export function Home({ query }: { query: string }) {
  const BASE_URL = 'https://eva-images-json-server.vercel.app/cards';

  const inputLocalStorage = localStorage.getItem('inputValue') || '';

  if (inputLocalStorage === '') {
  } else {
    query = inputLocalStorage;
  }

  let url;

  if (query) {
    url = `${BASE_URL}/?title_like=${query}`;
  } else {
    url = BASE_URL;
  }

  const { loading, data } = useFetch<Card[]>(url, [] as Card[]);

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
