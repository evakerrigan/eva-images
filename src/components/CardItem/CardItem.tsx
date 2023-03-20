import React, { Component } from 'react';
import './CardItem.scss';

export interface Card {
  id?: string;
  title?: string;
  url?: string;
  shops?: string[];
  tags?: string[];
}

export type CardItemProps = {
  card: Card;
};

export class CardItem extends Component<CardItemProps> {
  render() {
    return (
      <div>
        <img className="card-image" src={this.props.card.url} />
        <div className="card-title">{this.props.card.title}</div>
      </div>
    );
  }
}
