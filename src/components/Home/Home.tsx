import React, { Component } from 'react';
import './Home.scss';
import cards from '../../data/cards.json';
import { CardItem } from '../CardItem/CardItem';

export class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2>Home</h2>
        <ul className="card-list">
          {cards.map((card) => (
            <li className="card-item" key={card.id}>
              <CardItem card={card} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
