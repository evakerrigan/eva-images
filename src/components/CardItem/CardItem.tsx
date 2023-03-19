import React, { Component } from 'react';
import './CardItem.scss';

interface typeCard {
  id: string;
  title: string;
  url: string;
  shops: string[];
  tags: string[];
}

type typeCardItem = {
  card: typeCard;
};

export class CardItem extends Component<typeCardItem> {
  render() {
    return (
      <div>
        <img className="card-image" src={this.props.card.url} />
        <div className="card-title">{this.props.card.title}</div>
      </div>
    );
  }
}
