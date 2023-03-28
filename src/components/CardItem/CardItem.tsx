import React, { Component } from 'react';
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

export class CardItem extends Component<CardItemProps> {
  render() {
    return (
      <div>
        {this.props.card.stockurl ? (
          <a
            href={this.props.card.stockurl}
            target="_blank"
            className="card-image-link"
            rel="noreferrer"
          >
            <img className="card-image" src={this.props.card.url} alt={this.props.card.title} />
          </a>
        ) : (
          <img className="card-image" src={this.props.card.url} alt={this.props.card.title} />
        )}

        <div className="card-sale-wrapper">
          <div className="card-sale-price">
            {this.props.card.price ? 'Buy at ' + this.props.card.price + '$' : ''}
          </div>
          <a
            href={this.props.card.stockurl}
            target="_blank"
            className="card-sale-link"
            rel="noreferrer"
          >
            {this.props.card.shops}
          </a>
        </div>
      </div>
    );
  }
}
