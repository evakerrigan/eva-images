import React from 'react';
import './ModalCard.scss';
import useFetch from '../../hooks/useFetch';
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
  const { data } = useFetch(id, 'id');
  const card = data.find((el) => el.id === id) || '';
  console.log('card', card);
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* {data.map((el) => ( */}
        <p>{(card as Card).title}</p>
        {/* ))} */}
      </div>
    </div>
  );
}
