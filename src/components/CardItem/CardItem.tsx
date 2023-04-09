import React, { useState } from 'react';
import './CardItem.scss';
import { ModalCard } from '../ModalCard/ModalCard';

export interface Card {
  id?: string;
  title?: string;
  url?: string;
  shops?: string[];
  price?: string;
  stockurl?: string;
  tags?: string[];
}

export type CardItemProps = {
  card: Card;
  // setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export function CardItem({ card }: CardItemProps) {
  const [active, setActive] = useState(false);
  return (
    <div>
      <img onClick={() => setActive(true)} className="card-image" src={card.url} alt={card.title} />

      <div className="card-sale-wrapper">
        <div className="card-sale-price">{card.price ? 'Buy at ' + card.price + '$' : ''}</div>
        <a href={card.stockurl} target="_blank" className="card-sale-link" rel="noreferrer">
          {card.shops}
        </a>
      </div>
      {active ? <ModalCard active={active} setActive={setActive} id={card.id as string} /> : null}
    </div>
  );
}
