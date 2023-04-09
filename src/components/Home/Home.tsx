import React from 'react';
import './Home.scss';
import { CardItem } from '../CardItem/CardItem';
import useFetch from '../../hooks/useFetch';

export function Home({ query }: { query: string }) {
  const { data } = useFetch(query);
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
