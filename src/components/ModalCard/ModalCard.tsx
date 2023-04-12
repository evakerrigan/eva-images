import React from 'react';
import './ModalCard.scss';
import { useFetch } from '../../hooks/useFetch';
import { Card } from '../CardItem/CardItem';

export function ModalCard({
  active,
  setActive,
  id,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}) {
  const BASE_URL = 'https://eva-images-json-server.vercel.app/cards';
  const url = `${BASE_URL}/?${id}`;

  const { loading, data } = useFetch<Card[]>(url, [] as Card[]);

  if (loading) return <div className="loading">Loading...</div>;

  const card = data.find((el) => el.id === id) || '';

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{(card as Card).title}</p>

        <div>
          <img className="card-image" src={(card as Card).url} alt={(card as Card).title} />

          <div className="card-sale-wrapper">
            <div className="card-sale-price">
              {(card as Card).price ? 'Buy at ' + (card as Card).price + '$' : ''}
            </div>
            <a
              href={(card as Card).stockurl}
              target="_blank"
              className="card-sale-link"
              rel="noreferrer"
            >
              {(card as Card).shops}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
