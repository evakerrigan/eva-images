import React from 'react';
import './CardItem.scss';

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
};

export function CardItem({ card }: CardItemProps) {
  return (
    <div>
      {card.stockurl ? (
        <a href={card.stockurl} target="_blank" className="card-image-link" rel="noreferrer">
          <img className="card-image" src={card.url} alt={card.title} />
        </a>
      ) : (
        <img className="card-image" src={card.url} alt={card.title} />
      )}

      <div className="card-sale-wrapper">
        <div className="card-sale-price">{card.price ? 'Buy at ' + card.price + '$' : ''}</div>
        <a href={card.stockurl} target="_blank" className="card-sale-link" rel="noreferrer">
          {card.shops}
        </a>
      </div>
    </div>
  );
}
