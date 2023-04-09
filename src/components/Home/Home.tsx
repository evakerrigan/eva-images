import React, { useState } from 'react';
import './Home.scss';
// import cards from '../../data/cards.json';
import { CardItem } from '../CardItem/CardItem';
import useFetch from '../../hooks/useFetch';
// import { ModalCard } from '../ModalCard/ModalCard';

export function Home({ query }: { query: string }) {
  // async function name() {
  //   const promise = await fetch();
  //   const data = promise.json();
  //   console.log('data', data);
  // }
  // name();
  // const [active, setActive] = useState(true);
  const { data } = useFetch(query);
  return (
    <div className="wrapper">
      <h2>Home</h2>
      <ul className="card-list">
        {data &&
          data.map((card) => (
            <li className="card-item" key={card.id}>
              <CardItem card={card} />
            </li>
          ))}
      </ul>
      {/* <ModalCard active={active} setActive={setActive} /> */}
    </div>
  );
}
